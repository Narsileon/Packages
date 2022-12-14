<?php

namespace App\Models;

#region USE

use App\Constants\Types;
use App\Traits\IsBaseModel;
use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;

#endregion

class MenuItem extends Model
{
    use HasFactory, HasRoles, IsBaseModel, IsFilterable, IsSortable;

    #region CONSTANTS

    public const FIELD_ID = 'id';

    public const FIELD_ACTIVE = 'active';
    public const FIELD_CHILDREN = 'children';
    public const FIELD_ICON = 'icon';
    public const FIELD_LABEL = 'label';
    public const FIELD_SLUG = 'slug';
    public const FIELD_TYPE = 'type';
    public const FIELD_URL = 'url';

    public const PROPERTY_PLURAL = 'plural';
    public const PROPERTY_VALUE = 'value';

    public const ATTRIBUTE_PERMISSIONS = 'permissions';
    public const ATTRIBUTE_ROLES = 'roles';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_ACTIVE,
        self::FIELD_ICON,
        self::FIELD_LABEL,
        self::FIELD_SLUG,
        self::FIELD_TYPE,
        self::FIELD_URL,
    ];

    protected $casts = [
        self::FIELD_ACTIVE => Types::BOOLEAN,
        self::FIELD_LABEL => Types::ARRAY,
    ];

    protected $guard_name = 'web';

    #endregion

    #region PUBLIC METHODS

    public function getChildrenAttribute($value)
    {
        if (is_null($value)) {
            $value = [];
        }

        return $value;
    }

    #endregion
}
