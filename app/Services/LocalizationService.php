<?php

namespace App\Services;

#region USE

use App\Models\Backend\Language;
use App\Models\Backend\Localization;
use App\Models\UserSetting;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

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

        $locale = self::getLocale();
        $locales = Language::where(Language::FIELD_ACTIVE, 1)->pluck(Language::FIELD_CODE)->toArray();
        $localization = self::getLocalization($locale);

        return compact(
            'locale',
            'locales',
            'localization',
        );
    }

    public static function getLocale() : string
    {
        if (Session::has('locale'))
        {
            App::setLocale(Session::get('locale'));
        }

        else if (Auth::user())
        {
            $locale = Auth::user()->settings->{ UserSetting::FIELD_LANGUAGE };

            App::setLocale($locale);
        }

        return App::getLocale();
    }

    public static function getLocalization($locale) : array
    {
        $defaultLocalization = self::getDefaultLocalization($locale);
        $customLocalization = self::getCustomLocalization($locale)->{ Localization::FIELD_LOCALIZATION };

        foreach($customLocalization as $customIndex=>$customObject)
        {
            foreach($defaultLocalization as $defaultIndex=>$defaultObject)
            {
                if ($defaultObject['path'] == $customObject['path'] && $defaultObject['key'] == $customObject['key'])
                {
                    $defaultLocalization[$defaultIndex] = $customObject;
                }
            }
        }

        return $defaultLocalization;
    }

    public static function getDefaultLocalization($locale)
    {
        $phpLocalization = self::getPhpLocalization($locale);
        $jsonLocalization = self::getJsonLocalization($locale);

        $defaultLocalization = array_merge($phpLocalization, $jsonLocalization);

        return self::formatLocalization($defaultLocalization);
    }

    public static function getCustomLocalization($locale) : Localization
    {
        return Localization::where(Localization::FIELD_CODE, '=', $locale)->first() ?? Localization::create([
            Localization::FIELD_CODE => $locale,
            Localization::FIELD_LOCALIZATION => [],
        ]);
    }

    public static function getLocalizationDifference($localization)
    {
        $defaultLocalization = self::getDefaultLocalization($localization[Localization::FIELD_CODE]);
        $customLocalization = [];

        foreach($localization[Localization::FIELD_LOCALIZATION] as $object)
        {
            foreach($defaultLocalization as $defaultObject)
            {
                if ($defaultObject['path'] == $object['path'] && $defaultObject['key'] == $object['key'])
                {
                    if($object['value'] != $defaultObject['value'])
                    {
                        $customLocalization[] = $object;
                    }
                }
            }
        }

        $localization[Localization::FIELD_LOCALIZATION] = $customLocalization;

        return $localization;
    }

    #endregion

    #region PRIVATE METHODS

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

    private static function formatLocalization($localization, $collection = [], $path = null) : array
    {
        foreach($localization as $key=>$value) {
            if (is_array($value))
            {
                $collection = self::formatLocalization($value, $collection, $path == null ? $key : $path . '.' . $key);
            }

            else
            {
                array_push($collection, [
                    'path' => $path,
                    'key' => $key,
                    'value' => $value,
                ]);
            }
        }

        return $collection;
    }

    #endregion
}
