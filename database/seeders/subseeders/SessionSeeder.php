<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Constants\Locales;
use App\Models\Backend\Language;
use Illuminate\Database\Seeder;

#endregion

class SessionSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->createLocales();
    }

    #endregion

    #region PRIVATE METHODS

    private function createLocales()
    {
        foreach(Locales::CODES as $code)
        {
            $active = (in_array($code, ['de', 'en', 'fr'])) ? true : false;

            Language::create([
                Language::FIELD_CODE => $code,
                Language::FIELD_ACTIVE => $active,
            ]);
        }
    }

    #endregion
}
