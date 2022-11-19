<?php

namespace App\Models\Backend;

#region USE

use App\Constants\CastTypes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#endregion

class Template extends Model
{
    use HasFactory;

    #region CONSTANTS

    public const FIELD_ID = 'id';
    public const FIELD_USER_ID='user_id';

    public const FIELD_DICTIONARIES = 'dictionaries';
    public const FIELD_FAQS = 'faqs';
    public const FIELD_FOOTER_LINKS = 'footer_links';
    public const FIELD_HEADER_LINKS = 'header_links';
    public const FIELD_LANGUAGES = 'languages';
    public const FIELD_ORDERS = 'orders';
    public const FIELD_ROLES = 'roles';
    public const FIELD_USERS = 'users';

    public const PROPERTY_USER = 'user';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_USER_ID,

        self::FIELD_DICTIONARIES,
        self::FIELD_FAQS,
        self::FIELD_FOOTER_LINKS,
        self::FIELD_HEADER_LINKS,
        self::FIELD_LANGUAGES,
        self::FIELD_ORDERS,
        self::FIELD_ROLES,
        self::FIELD_USERS,
    ];

    protected $casts = [
        self::FIELD_DICTIONARIES => CastTypes::ARRAY,
        self::FIELD_FAQS => CastTypes::ARRAY,
        self::FIELD_FOOTER_LINKS => CastTypes::ARRAY,
        self::FIELD_HEADER_LINKS => CastTypes::ARRAY,
        self::FIELD_LANGUAGES => CastTypes::ARRAY,
        self::FIELD_ORDERS => CastTypes::ARRAY,
        self::FIELD_ROLES => CastTypes::ARRAY,
        self::FIELD_USERS => CastTypes::ARRAY,
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
