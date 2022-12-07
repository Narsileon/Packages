<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Constants\Languages;
use App\Models\Backend\Language;
use Illuminate\Database\Seeder;

#endregion

class SessionSeeder extends Seeder
{
    #region CONSTANTS

    private const ACTIVE_LANGUAGES = [
        'de',
        'en',
        'fr',
    ];

    #endregion

    #region PUBLIC METHODS

    public function run()
    {
        $this->createLocales();
    }

    #endregion

    #region PRIVATE METHODS

    private function createLocales()
    {
        foreach(Languages::CODES as $code)
        {
            $active = (in_array($code, self::ACTIVE_LANGUAGES));

            Language::create([
                Language::FIELD_CODE => $code,
                Language::FIELD_ACTIVE => $active,
            ]);
        }
    }

    #endregion
}
