<?php

namespace App\Localization;

#region USE

use App\Models\Backoffice\Language;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

#endregion

abstract class Localization
{
    #region CONSTANTS

    private const CACHE_PREFIX = 'localization_';
    private const FALLBACK_LOCALE = 'app.fallback_locale';
    private const JSON_EXTENSION = '.json';

    #endregion

    #region PUBLIC METHODS

    public static function get()
    {
        $locales = Language::where(Language::FIELD_ACTIVE, 1)->pluck(Language::FIELD_LOCALE)->toArray();
        $locale = App::getLocale();
        $dictionary = self::getLocalization($locale);

        return compact(
            'locales',
            'locale',
            'dictionary',
        );
    }

    #endregion

    #region PRIVATE METHODS

    private static function getLocalization($locale)
    {
        return Cache::remember(self::CACHE_PREFIX . $locale, 600, function() use($locale)
        {
            $phpLocalization = self::getPhpLocalization($locale);
            $jsonLocalization = self::getJsonLocalization($locale);

            return array_merge($phpLocalization, $jsonLocalization);
        });
    }

    private static function getPhpLocalization($locale) : array
    {
        $files = null;

        if (!File::exists(lang_path($locale)))
        {
            if (!File::exists(lang_path(Config::get(self::FALLBACK_LOCALE))))
            {
                Log::error('No php localization file found for fallback locale');

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
    }

    private static function getJsonLocalization($locale) : array
    {
        $file = null;

        if (!File::exists(lang_path($locale . self::JSON_EXTENSION)))
        {
            if (!File::exists(lang_path(Config::get(self::FALLBACK_LOCALE) . self::JSON_EXTENSION)))
            {
                Log::error('No json localization file found for fallback locale');

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
    }

    #endregion
}