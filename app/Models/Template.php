<?php

namespace App\Models;

#region USE

use App\Constants\Types;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class Template extends Model
{
    use HasFactory;

    #region CONSTANTS

    public const FIELD_ID = 'id';

    public const FIELD_TEMPLATE = 'template';
    public const FIELD_TYPE = 'type';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_TEMPLATE,
        self::FIELD_TYPE,
    ];

    protected $casts = [
        self::FIELD_TEMPLATE => Types::ARRAY,
    ];

    #endregion
}
