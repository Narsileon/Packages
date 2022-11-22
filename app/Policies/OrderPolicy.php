<?php

namespace App\Policies;

#region USE

use App\Acl\Permissions;
use App\Acl\Roles;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

#endregion

class OrderLinkPolicy
{
    use HandlesAuthorization;

    #region PUBLIC METHODS

    public function before(User $user) : bool
    {
        return $user->hasRole(Roles::SUPER_ADMIN) ? true : false;
    }

    public function view(User $user) : bool
    {
        return $user->hasPermissionTo(Permissions::ORDERS_VIEW) ? true : false;
    }

    public function create(User $user) : bool
    {
        return $user->hasPermissionTo(Permissions::ORDERS_CREATE) ? true : false;
    }

    public function update(User $user) : bool
    {
        return $user->hasPermissionTo(Permissions::ORDERS_UPDATE) ? true : false;
    }

    public function delete(User $user) : bool
    {
        return $user->hasPermissionTo(Permissions::ORDERS_DELETE) ? true : false;
    }

    #endregion
}
