<?php

namespace App\Models\Backend;

#region USE

use App\Constants\Types;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class Localization extends Model
{
    use HasFactory;

    #region CONSTANTS

    public const FIELD_ID = 'id';

    public const FIELD_CODE = 'code';
    public const FIELD_LOCALIZATION ='localization';

    public const PROPERTY_USER = 'user';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_CODE,
        self::FIELD_LOCALIZATION,
    ];

    protected $casts = [
        self::FIELD_LOCALIZATION => Types::ARRAY,
    ];

    protected $perPage = 10;

    #endregion
}
