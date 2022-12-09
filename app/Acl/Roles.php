<?php

namespace App\Acl;

#region USE

use App\Http\Resources\Backend\Management\UserRoleCollection;
use App\Models\UserRole;
use App\Traits\HasConstants;

#endregion

abstract class Roles
{
    use HasConstants;

    #region CONSTANTS

    public const SUPER_ADMIN = 'super-admin';

    public const ADMIN = 'admin';

    #endregion

    #region PUBLIC METHODS

    public static function getAll() : UserRoleCollection
    {
        return new UserRoleCollection(UserRole::All());
    }

    #endregion
}
