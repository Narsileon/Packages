<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Models\Backoffice\Order;
use Illuminate\Database\Seeder;

#endregion

class BackofficeSeeder extends Seeder
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
