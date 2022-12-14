<?php

namespace Database\Seeders;

#region USE

use Database\Seeders\Subseeders\BackendSeeder;
use Database\Seeders\Subseeders\FrontendSeeder;
use Database\Seeders\Subseeders\MenuSeeder;
use Database\Seeders\Subseeders\PermissionSeeder;
use Database\Seeders\Subseeders\SessionSeeder;
use Database\Seeders\Subseeders\UserSeeder;
use Illuminate\Database\Seeder;

#endregion

class DatabaseSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->call([
            PermissionSeeder::class,
            SessionSeeder::class,
            BackendSeeder::class,
            FrontendSeeder::class,
            MenuSeeder::class,
            UserSeeder::class,
        ]);
    }

    #endregion
}
