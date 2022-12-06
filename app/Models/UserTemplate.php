<?php

namespace App\Models;

#region USE

use App\Constants\Types;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#endregion

class UserTemplate extends Model
{
    use HasFactory;

    #region CONSTANTS

    public const FIELD_ID = 'id';

    public const FIELD_CUSTOM = 'custom';
    public const FIELD_DEFAULT = 'default';
    public const FIELD_TYPE = 'type';
    public const FIELD_USER_ID='user_id';

    public const PROPERTY_USER = 'user';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_CUSTOM,
        self::FIELD_DEFAULT,
        self::FIELD_TYPE,
        self::FIELD_USER_ID,
    ];

    protected $casts = [
        self::FIELD_CUSTOM => Types::ARRAY,
        self::FIELD_DEFAULT => Types::ARRAY,
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
