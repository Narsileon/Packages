<?php

namespace App\Models;

#region USE

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#endregion

class UserSetting extends Model
{
    use HasFactory;

    #region CONSTANTS

    public const FIELD_ID = 'id';

    public const FIELD_LANGUAGE = 'language';
    public const FIELD_THEME = 'theme';
    public const FIELD_USER_ID='user_id';

    public const PROPERTY_USER = 'user';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_LANGUAGE,
        self::FIELD_THEME,
        self::FIELD_USER_ID,
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
