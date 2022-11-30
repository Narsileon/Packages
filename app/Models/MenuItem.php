<?php

namespace App\Models;

#region USE

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class MenuItem extends Model
{
    use HasFactory;

    #region CONSTANTS

    public const FIELD_ID = 'id';

    public const FIELD_ICON = 'icon';
    public const FIELD_LABEL = 'label';
    public const FIELD_TYPE = 'type';
    public const FIELD_URL = 'url';
    public const FIELD_CHILDREN = 'children';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_ICON,
        self::FIELD_LABEL,
        self::FIELD_TYPE,
        self::FIELD_URL,
    ];

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
