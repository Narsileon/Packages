<?php

namespace App\Models\Backoffice;

#region USE

use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class Localization extends Model
{
    use HasFactory, IsFilterable, IsSortable;

    #region CONSTANTS

    const FIELD_ID = 'id';
    const FIELD_KEY = 'key';
    const FIELD_VALUE = 'value';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_KEY,
        self::FIELD_VALUE,
    ];

    protected $perPage = 10;

    #endregion
}
