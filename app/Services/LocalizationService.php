<?php

namespace App\Services;

#region USE

use App\Models\Backend\Language;
use App\Models\Backend\Localization;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

#endregion

class LocalizationService
{
    #region CONSTANTS

    private const CACHE_PREFIX = 'localization_';
    private const FALLBACK_LOCALE = 'app.fallback_locale';
    private const JSON_EXTENSION = '.json';

    #endregion

    #region PUBLIC METHODS

    public static function get($customized = true)
    {
        Cache::flush();

        $locale = App::getLocale();
        $locales = Language::where(Language::FIELD_ACTIVE, 1)->pluck(Language::FIELD_CODE)->toArray();
        $dictionary = self::getLocalization($locale);

        return compact(
            'locale',
            'locales',
            'dictionary',
        );
    }

    public static function getCustomLocalization()
    {
        $locale = App::getLocale();

        return Localization::where(Localization::FIELD_LOCALIZATION, '=', $locale)->first();
    }

    public static function getLocalizationKeys() : array
    {
        $locale = Config::get(self::FALLBACK_LOCALE);
        $localization = self::getLocalization($locale);

        return self::replaceRecursivelyArrayValues($localization, '');
    }

    private static function replaceRecursivelyArrayValues($array, $replacer) : array
    {
        foreach($array as $key=>$value)
        {
            if (is_array($value))
            {
                $array[$key] = self::replaceRecursivelyArrayValues($value, $replacer);
            }

            else
            {
                $array[$key] = $replacer;
            }
        }

        return $array;
    }

    #endregion

    #region PRIVATE METHODS

    private static function getLocalization($locale)
    {
        $phpLocalization = self::getPhpLocalization($locale);
        $jsonLocalization = self::getJsonLocalization($locale);

        $localization = array_merge($phpLocalization, $jsonLocalization);

        $customLocalization = self::getCustomLocalization()->{ Localization::FIELD_LOCALIZATION };



        return $localization;
    }

    private static function getPhpLocalization($locale) : array
    {
        $key = self::CACHE_PREFIX . 'php_' . $locale;

        return Cache::rememberForever($key, function () use($locale)
        {
            $files = null;

            if (!File::exists(lang_path($locale)))
            {
                if (!File::exists(lang_path(Config::get(self::FALLBACK_LOCALE))))
                {
                    Log::error('No php localization file found for fallback locale.');

                    return [];
                }

                else
                {
                    $files = File::files(lang_path(Config::get(self::FALLBACK_LOCALE)));
                }
            }

            else
            {
                $files = File::files(lang_path($locale));
            }

            return collect($files)
                ->map(fn($file) => [
                    $file->getFilenameWithoutExtension() => require($file)
                ])
                ->collapse()
                ->toArray();
        });
    }

    private static function getJsonLocalization($locale) : array
    {
        $key = self::CACHE_PREFIX . 'json_' . $locale;

        return Cache::rememberForever($key, function () use($locale)
        {
            $file = null;

            if (!File::exists(lang_path($locale . self::JSON_EXTENSION)))
            {
                if (!File::exists(lang_path(Config::get(self::FALLBACK_LOCALE) . self::JSON_EXTENSION)))
                {
                    Log::error('No json localization file found for fallback locale.');

                    return [];
                }

                else
                {
                    $file = File::get(lang_path(Config::get(self::FALLBACK_LOCALE) . self::JSON_EXTENSION));
                }
            }

            else
            {
                $file = File::get(lang_path($locale . self::JSON_EXTENSION));
            }

            return json_decode($file, true);
        });
    }

    #endregion
}
