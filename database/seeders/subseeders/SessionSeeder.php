<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Constants\Locales;
use App\Models\Session\Locale;
use Illuminate\Database\Seeder;

#endregion

class SessionSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->CreateLocales();
    }

    #endregion

    #region PRIVATE METHODS

    private function CreateLocales()
    {
        foreach(Locales::CODES as $code)
        {
            $active = (in_array($code, ['de', 'en', 'fr'])) ? true : false;

            Locale::create([
                Locale::FIELD_LOCALE => $code,
                Locale::FIELD_ACTIVE => $active,
            ]);
        }
    }

    #endregion
}
