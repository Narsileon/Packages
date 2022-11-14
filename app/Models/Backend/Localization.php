<?php

namespace App\Models\Backend;

#region USE

use App\Constants\CastTypes;
use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#endregion

class Localization extends Model
{
    use HasFactory, IsFilterable, IsSortable;

    #region CONSTANTS

    const FIELD_ID = 'id';
    const FIELD_USER_ID='user_id';
    const FIELD_DICTIONARY = 'dictionary';

    const PROPERTY_USER = 'user';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_DICTIONARY,
    ];

    protected $casts = [
        self::FIELD_DICTIONARY => CastTypes::ARRAY,
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
