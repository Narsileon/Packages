<?php

namespace App\Models;

#region USE

use App\Constants\Types;
use App\Models\UserSetting;
use App\Models\UserTemplate;
use App\Traits\IsBaseModel;
use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

#endregion

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, HasRoles, IsBaseModel, IsFilterable, IsSortable, Notifiable;

    #region CONSTANTS

    public const FIELD_ID = 'id';

    public const FIELD_EMAIL = 'email';
    public const FIELD_EMAIL_VERIFIED_AT = 'email_verified_at';
    public const FIELD_FIRST_NAME = 'first_name';
    public const FIELD_LAST_NAME = 'last_name';
    public const FIELD_PASSWORD = 'password';
    public const FIELD_REMEMBER_TOKEN = 'remember_token';
    public const FIELD_USERNAME = 'username';

    public const ATTRIBUTE_PERMISSIONS = 'permissions';
    public const ATTRIBUTE_ROLES = 'roles';
    public const ATTRIBUTE_SETTINGS = 'settings';
    public const ATTRIBUTE_TEMPLATES = 'templates';

    #endregion

    #region FIELDS

    protected $fillable =
    [
        self::FIELD_EMAIL,
        self::FIELD_FIRST_NAME,
        self::FIELD_LAST_NAME,
        self::FIELD_PASSWORD,
        self::FIELD_USERNAME,
    ];

    protected $hidden =
    [
        self::FIELD_PASSWORD,
        self::FIELD_REMEMBER_TOKEN,
    ];

    protected $casts =
    [
        self::FIELD_EMAIL_VERIFIED_AT => Types::DATETIME,
    ];

    protected $perPage = 100;

    #endregion

    #region PUBLIC METHODS

    public function setPasswordAttribute($password)
    {
        $this->attributes[self::FIELD_PASSWORD] = bcrypt($password);
    }

    public function settings() : HasOne
    {
        return $this->hasOne(UserSetting::class);
    }

    public function templates() : HasMany
    {
        return $this->hasMany(UserTemplate::class);
    }

    #endregion
}
