<?php

namespace App\Models;

#region USE

use App\Constants\Types;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#endregion

class UserMenu extends Model
{
    use HasFactory;

    #region CONSTANTS

    public const FIELD_ID = 'id';

    public const FIELD_ACTIVE = 'active';
    public const FIELD_TYPE = 'category';
    public const FIELD_TEMPLATE = 'template';
    public const FIELD_TITLE = 'title';
    public const FIELD_USER_ID ='user_id';

    public const PROPERTY_USER = 'user';

    public const TYPE_BACKEND_MENU = 'backend_menu';
    public const TYPE_FRONTEND_FOOTER = 'frontend_footer';
    public const TYPE_FRONTEND_HEADER = 'frontend_header';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_ACTIVE,
        self::FIELD_TYPE,
        self::FIELD_TEMPLATE,
        self::FIELD_TITLE,
        self::FIELD_USER_ID,
    ];

    protected $casts = [
        self::FIELD_ACTIVE => Types::BOOLEAN,
        self::FIELD_TEMPLATE => Types::ARRAY,
    ];

    #endregion

    #region PUBLIC METHODS

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class, self::FIELD_ID);
    }

    #endregion
}
