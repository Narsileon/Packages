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
        $this->createRoles();
        $this->createPermissions();

        $this->initSuperAdmin();
    }

    #endregion

    #region PRIVATE METHODS

    private function createRoles()
    {
        $roles = Roles::getConstants();

        foreach($roles as $role)
        {
            Role::create([
                'name' => $role,
            ]);
        }
    }

    private function createPermissions()
    {
        $permissions = Permissions::getConstants();

        foreach($permissions as $permission)
        {
            Permission::create([
                'name' => $permission,
            ]);
        }
    }

    private function initSuperAdmin()
    {
        $role = Role::findByName(Roles::SUPER_ADMIN);

        $role->givePermissionTo(Permissions::getConstants());
    }

    #endregion
}
