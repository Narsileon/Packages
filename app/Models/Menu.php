<?php

namespace App\Models;

#region USE

use App\Constants\Types;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#endregion

class Menu extends Model
{
    use HasFactory;

    #region CONSTANTS

    public const FIELD_ID = 'id';
    public const FIELD_USER_ID ='user_id';
    public const FIELD_ACTIVE = 'active';

    public const FIELD_CATEGORY = 'category';
    public const FIELD_TEMPLATE = 'template';

    public const PROPERTY_USER = 'user';

    public const CATEGORY_BACKEND = 'backend';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_USER_ID,
        self::FIELD_ACTIVE,
        self::FIELD_CATEGORY,
        self::FIELD_TEMPLATE,
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
