<?php

namespace App\Services;

#region USE

use App\Models\Backend\Language;
use App\Models\Backend\Localization;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
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

    public static function createTable($user)
    {
        Localization::create([
            Localization::FIELD_USER_ID => $user->id,
            Localization::FIELD_DICTIONARY => self::getCustomizableLocalization(),
        ]);
    }

    public static function get($customized = true)
    {
        $locale = App::getLocale();
        $locales = Language::where(Language::FIELD_ACTIVE, 1)->pluck(Language::FIELD_CODE)->toArray();
        $dictionary = $customized ? self::getCustomizedLocalization($locale) : self::getLocalization($locale);

        return compact(
            'locale',
            'locales',
            'dictionary',
        );
    }

    public static function getCustomizableLocalization() : array
    {
        $locale = App::getLocale();

        return array_fill_keys(array_keys(self::getPhpLocalization($locale)["common"]), '');
    }

    #endregion

    #region PRIVATE METHODS

    private static function getLocalization($locale)
    {
        $phpLocalization = self::getPhpLocalization($locale);
        $jsonLocalization = self::getJsonLocalization($locale);

        return array_merge($phpLocalization, $jsonLocalization);
    }

    private static function getCustomizedLocalization($locale)
    {
        $localization = self::getLocalization($locale);
        $customLocalization = self::getCustomLocalization($locale);

        $localization['common'] = array_merge($localization['common'], $customLocalization);

        return $localization;
    }

    private static function getPhpLocalization($locale) : array
    {
        $key = self::CACHE_PREFIX . 'php_' . $locale;

        //Cache::forget($key);

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

        //Cache::forget($key);

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

    private static function getCustomLocalization() : array
    {
        return Auth::user() ? array_filter(Auth::user()->localizations->dictionary) : [];
    }

    #endregion
}
