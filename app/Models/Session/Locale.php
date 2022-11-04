<?php

namespace App\Models\Session;

#region USE

use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class Locale extends Model
{
    use HasFactory, IsFilterable, IsSortable;

    #region CONSTANTS

    const FIELD_ID = 'id';
    const FIELD_LOCALE = 'locale';
    const FIELD_ACTIVE = 'active';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_LOCALE,
        self::FIELD_ACTIVE,
    ];

    protected $hidden =
    [
        self::CREATED_AT,
        self::UPDATED_AT,
    ];

    protected $perPage = 10;

    #endregion
}
