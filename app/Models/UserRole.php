<?php

namespace App\Models;

#region USE

use App\Traits\IsBaseModel;
use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Spatie\Permission\Models\Role;

#endregion

class UserRole extends Role
{
    use IsBaseModel, IsFilterable, IsSortable;

    #region CONSTANTS

    public const FIELD_ID = 'id';
    public const FIELD_NAME = 'name';
    public const FIELD_GUARD ='guard_name';

    public const ATTRIBUTE_PERMISSIONS ='permissions';

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