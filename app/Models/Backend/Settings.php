<?php

namespace App\Models\Backend;

#region USE

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class Settings extends Model
{
    use HasFactory;

    #region CONSTANTS

    public const FIELD_ID = 'id';

    public const FIELD_APP_NAME = 'app_name';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_APP_NAME,
    ];

    protected $perPage = 10;

    #endregion
}