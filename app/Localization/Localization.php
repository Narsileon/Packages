<?php

namespace App\Localization;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;

abstract class Localization
{
    #region CONSTANTS

    private const INCLUDE_FILENAME = true; 

    #endregion

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
        if (!File::exists(lang_path("$locale")))
        {
            return [];
        } 

        return collect(File::allFiles(lang_path("$locale")))
            ->filter(function($file) 
            {
                return $file->getExtension() === "php";
            })
            ->flatMap(function($file) 
            {
                return self::INCLUDE_FILENAME ? File::getRequire($file->getRealPath()) : Arr::dot(File::getRequire($file->getRealPath()));
            })
            ->toArray()
        ;
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