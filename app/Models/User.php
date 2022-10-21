<?php

namespace App\Models;

#region USE

use App\Constants\CastTypes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

#endregion

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, HasRoles, Notifiable;

    #region CONSTANTS

    const FIELD_ID = "id";
    const FIELD_USERNAME = "username";
    const FIELD_EMAIL = "email";
    const FIELD_EMAIL_VERIFIED_AT = "email_verified_at";
    const FIELD_PASSWORD = "password";
    const FIELD_LAST_NAME = "last_name";
    const FIELD_FIRST_NAME = "first_name";
    const FIELD_REMEMBER_TOKEN = "remember_token";

    const ATTRIBUTE_ROLES = "roles";
    const ATTRIBUTE_PERMISSIONS = "permissions";

    #endregion

    #region FIELDS

    protected $fillable = 
    [
        self::FIELD_USERNAME,
        self::FIELD_EMAIL,
        self::FIELD_PASSWORD,
        self::FIELD_LAST_NAME,
        self::FIELD_FIRST_NAME,        
    ];

    protected $hidden =
    [
        self::FIELD_PASSWORD,
        self::FIELD_REMEMBER_TOKEN,
    ];

    protected $casts =
    [
        self::FIELD_EMAIL_VERIFIED_AT => CastTypes::DATETIME,
    ];

    protected $perPage = 100;

    #endregion

    #region PUBLIC METHODS

    public function setPasswordAttribute($password)
    {
        $this->attributes[self::FIELD_PASSWORD] = bcrypt($password);
    }

    #endregion
}
