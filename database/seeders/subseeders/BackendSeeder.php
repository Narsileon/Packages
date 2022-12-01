<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Models\Backend\Order;
use App\Models\Backend\GeneralSettings;
use App\Services\MenuService;
use App\Templates\Menus\BackendMenuTemplate;
use Illuminate\Database\Seeder;

#endregion

class BackendSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        MenuService::createMenuItem(BackendMenuTemplate::DEFAULT);

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
        GeneralSettings::create([
            GeneralSettings::FIELD_APP_NAME => 'PIA-Framework',
        ]);
    }

    #endregion
}
