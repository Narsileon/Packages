<?php

namespace App\Localization;

#region USE

use App\Models\Session\Locale;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;

#endregion

abstract class Localization
{
    #region PUBLIC METHODS

    public static function get()
    {
        $locales = Locale::where('active', 1)->pluck('locale')->toArray();
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
        return Cache::remember('localization_' . $locale, 600, function() use($locale)
        {
            $phpLocalization = self::getPhpLocalization($locale);
            $jsonLocalization = self::getJsonLocalization($locale);

            return array_merge($phpLocalization, $jsonLocalization);
        });
    }

    private static function getPhpLocalization($locale) : array
    {
        $translationFiles = File::exists(lang_path($locale)) ? File::files(lang_path($locale)) : File::files(lang_path('en'));

        return collect($translationFiles)
            ->map(fn($file) => [$file->getFilenameWithoutExtension() => require($file)])
            ->collapse()
            ->toArray();
    }

    private static function getJsonLocalization($locale) : array
    {
        if (!File::exists(lang_path($locale . '.json')))
        {
            return [];
        }

        return json_decode(File::get(lang_path($locale . '.json')), true);
    }

    #endregion
}