<?php

namespace App\Models;

#region USE

use App\Constants\Types;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class Menu extends Model
{
    use HasFactory;

    #region CONSTANTS

    public const FIELD_ID = 'id';
    public const FIELD_TITLE = 'title';
    public const FIELD_TEMPLATE = 'template';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_TITLE,
        self::FIELD_TEMPLATE,
    ];

    protected $casts = [
        self::FIELD_TEMPLATE => Types::ARRAY,
    ];

    #endregion
}
