<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Models\Backend\Order;
use App\Models\Backend\Settings;
use Illuminate\Database\Seeder;

#endregion

class BackendSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->createOrders();
        $this->createSettings();
    }

    #endregion

    #region PRIVATE METHODS

    private function createOrders()
    {
        Order::factory(10)->create();
    }

    private function createSettings()
    {
        Settings::create([
            Settings::FIELD_APP_NAME => 'PIA-Framework',
        ]);
    }

    #endregion
}
