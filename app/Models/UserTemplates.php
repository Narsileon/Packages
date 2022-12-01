<?php

namespace App\Models;

#region USE

use App\Constants\Types;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#endregion

class UserTemplates extends Model
{
    use HasFactory;

    #region CONSTANTS

    public const FIELD_ID = 'id';
    public const FIELD_USER_ID='user_id';

    public const FIELD_TYPE = 'type';
    public const FIELD_SETTINGS = 'settings';

    public const FIELD_TEMPLATE_FAQS = 'template_faqs';
    public const FIELD_TEMPLATE_LANGUAGES = 'template_languages';
    public const FIELD_TEMPLATE_LOCALIZATIONS = 'template_localizations';
    public const FIELD_TEMPLATE_MENU_ITEMS = 'template_menu_items';
    public const FIELD_TEMPLATE_ORDERS = 'template_orders';
    public const FIELD_TEMPLATE_ROLES = 'template_roles';
    public const FIELD_TEMPLATE_USERS = 'template_users';

    public const PROPERTY_USER = 'user';

    public const TYPE_DEFAULT = 'default';
    public const TYPE_CUSTOM = 'custom';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_USER_ID,
        self::FIELD_TYPE,
        self::FIELD_SETTINGS,
        self::FIELD_TEMPLATE_FAQS,
        self::FIELD_TEMPLATE_LANGUAGES,
        self::FIELD_TEMPLATE_LOCALIZATIONS,
        self::FIELD_TEMPLATE_MENU_ITEMS,
        self::FIELD_TEMPLATE_ORDERS,
        self::FIELD_TEMPLATE_ROLES,
        self::FIELD_TEMPLATE_USERS,
    ];

    protected $casts = [
        self::FIELD_SETTINGS => Types::ARRAY,
        self::FIELD_TEMPLATE_FAQS => Types::ARRAY,
        self::FIELD_TEMPLATE_LANGUAGES => Types::ARRAY,
        self::FIELD_TEMPLATE_LOCALIZATIONS => Types::ARRAY,
        self::FIELD_TEMPLATE_MENU_ITEMS => Types::ARRAY,
        self::FIELD_TEMPLATE_ORDERS => Types::ARRAY,
        self::FIELD_TEMPLATE_ROLES => Types::ARRAY,
        self::FIELD_TEMPLATE_USERS => Types::ARRAY,
    ];

    protected $perPage = 10;

    #endregion

    #region PUBLIC METHODS

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class, self::FIELD_ID);
    }

    #endregion
}
