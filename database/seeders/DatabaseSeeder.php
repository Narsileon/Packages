<?php

namespace Database\Seeders;

#region USE

use Database\Seeders\Subseeders\BackofficeSeeder;
use Database\Seeders\Subseeders\PermissionSeeder;
use Database\Seeders\Subseeders\SessionSeeder;
use Database\Seeders\Subseeders\UserSeeder;
use Database\Seeders\Subseeders\WebSeeder;
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
            UserSeeder::class,
            WebSeeder::class,
            BackofficeSeeder::class,
        ]);
    }

    #endregion
}
