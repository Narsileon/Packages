<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Models\Backend\Order;
use Illuminate\Database\Seeder;

#endregion

class BackendSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->CreateOrders();
    }

    #endregion

    #region PRIVATE METHODS

    private function CreateOrders()
    {
        Order::factory(10)->create();
    }

    #endregion
}
