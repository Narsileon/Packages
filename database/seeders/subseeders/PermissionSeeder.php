<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Acl\Permissions;
use App\Acl\Roles;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

#endregion

class PermissionSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->CreateRoles();
        $this->CreatePermissions();
        $this->InitSuperAdmin();
    }

    #endregion

    #region PRIVATE METHODS

    private function CreateRoles()
    {
        $roles = Roles::getConstants();

        foreach($roles as $role)
        {
            Role::create(['name' => $role]);
        }
    }

    private function CreatePermissions() 
    {
        $permissions = Permissions::getConstants();

        foreach($permissions as $permission)
        {
            Permission::create(['name' => $permission]);
        }
    }

    private function InitSuperAdmin()
    {
        $role = Role::findByName(Roles::SUPER_ADMIN);

        $role->givePermissionTo(Permissions::getConstants());
    }

    #endregion
}
