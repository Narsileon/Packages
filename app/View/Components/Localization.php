<?php

namespace App\View\Components;

#region USE

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\View\Component;

#endregion

class Localization extends Component
{
    #region CONSTRUCTORS

    public function __construct()
    {

    }

    #endregion

    #region CONSTANTS

    private const INCLUDE_FILENAME = true; 

    #endregion

    #region PUBLIC METHODS

    public function render()
    {   
        $localization = $this->getLocalization(App::getLocale());

        return view('components.localization', compact(
            "localization",
        ));
    }

    #endregion

    #region PRIVATE METHODS

    private function getLocalization($locale) {
        return Cache::rememberForever("localization_$locale", function() use($locale) 
        {
            $phpLocalization = $this->getPhpLocalization($locale);
            $jsonLocalization = $this->getJsonLocalization($locale);
        
            return array_merge($phpLocalization, $jsonLocalization); 
        });
    }

    private function getPhpLocalization($locale) : array
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

    private function getJsonLocalization($locale) : array
    {
        if (!File::exists(lang_path("$locale.json")))
        {
            return [];
        }

        return json_decode(File::get(lang_path("$locale.json")), true);
    }

    #endregion
}
