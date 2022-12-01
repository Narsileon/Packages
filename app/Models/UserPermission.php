<?php

namespace App\Models;

#region USE

use Spatie\Permission\Models\Permission;

#endregion

class UserPermission extends Permission
{
    #region CONSTANTS

    public const FIELD_ID = 'id';

    public const FIELD_GUARD ='guard_name';
    public const FIELD_NAME = 'name';

    #endregion

    #region FIELDS

    protected $fillable =
    [
        self::FIELD_GUARD,
        self::FIELD_NAME,
    ];

    protected $perPage = 100;

    #endregion
}