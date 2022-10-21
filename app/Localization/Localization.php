<?php

namespace App\Localization;

#region USE

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;

#endregion

abstract class Localization
{
    #region PUBLIC METHODS

    public static function get() 
    {
        $availableLocales = Config::get("app.available_locales");
        $locale = App::getLocale();
        $strings = self::getLocalization($locale);

        return compact(
            "availableLocales",
            "locale",
            "strings",
        );
    }

    #endregion

    #region PRIVATE METHODS

    private static function getLocalization($locale) 
    {
        return Cache::rememberForever("localization_$locale", function() use($locale) 
        {
            $phpLocalization = self::getPhpLocalization($locale);
            $jsonLocalization = self::getJsonLocalization($locale);
        
            return array_merge($phpLocalization, $jsonLocalization); 
        });
    }

    private static function getPhpLocalization($locale) : array
    {       
        $translationFiles = File::exists(lang_path("$locale")) ? File::files(lang_path("$locale")) : File::files(lang_path("en"));

        return collect($translationFiles)
            ->map(fn($file) => [$file->getFilenameWithoutExtension() => require($file)])
            ->collapse()
            ->toArray();
    }

    private static function getJsonLocalization($locale) : array
    {
        if (!File::exists(lang_path("$locale.json")))
        {
            return [];
        }

        return json_decode(File::get(lang_path("$locale.json")), true);
    }

    #endregion
}