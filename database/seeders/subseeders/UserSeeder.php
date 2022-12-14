<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Acl\Roles;
use App\Models\User;
use Illuminate\Database\Seeder;

#endregion

class UserSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->createSuperAdmin();
    }

    #endregion

    #region PRIVATE METHODS

    private function createSuperAdmin()
    {
        $user = User::factory()->create([
            User::FIELD_USERNAME => 'Narsilien',
            User::FIELD_EMAIL => 'jonathan.rigaux@pia-gruppe.org',
            user::FIELD_PASSWORD => '123456789',
            User::FIELD_LAST_NAME => 'Rigaux',
            User::FIELD_FIRST_NAME => 'Jonathan',
        ]);

        $user->assignRole(Roles::SUPER_ADMIN);
    }

    #endregion
}
