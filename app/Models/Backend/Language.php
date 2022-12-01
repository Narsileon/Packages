<?php

namespace App\Models\Backend;

#region USE

use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class Language extends Model
{
    use HasFactory, IsFilterable, IsSortable;

    #region CONSTANTS

    public const FIELD_ID = 'id';

    public const FIELD_ACTIVE = 'active';
    public const FIELD_CODE = 'code';

    public const PROPERTY_LANGUAGE = 'language';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_ACTIVE,
        self::FIELD_CODE,
    ];

    protected $hidden =
    [
        self::CREATED_AT,
        self::UPDATED_AT,
    ];

    protected $perPage = 10;

    #endregion
}
