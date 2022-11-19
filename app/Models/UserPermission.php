<?php

namespace App\Models;

#region USE

use Spatie\Permission\Models\Permission;

#endregion

class UserPermission extends Permission
{
    #region CONSTANTS

    public const FIELD_ID = 'id';
    public const FIELD_NAME = 'name';
    public const FIELD_GUARD ='guard_name';

    #endregion

    #region FIELDS

    protected $fillable =
    [
        self::FIELD_NAME,
        self::FIELD_GUARD,
    ];

    protected $perPage = 100;

    #endregion
}