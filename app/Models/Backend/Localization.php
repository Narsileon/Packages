<?php

namespace App\Models\Backend;

#region USE

use App\Constants\Types;
use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#endregion

class Localization extends Model
{
    use HasFactory, IsFilterable, IsSortable;

    #region CONSTANTS

    public const FIELD_ID = 'id';
    public const FIELD_USER_ID='user_id';

    public const FIELD_DICTIONARY = 'dictionary';

    public const PROPERTY_USER = 'user';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_USER_ID,
        self::FIELD_DICTIONARY,
    ];

    protected $casts = [
        self::FIELD_DICTIONARY => Types::ARRAY,
    ];

    protected $perPage = 10;

    #endregion

    #region PUBLIC METHODS

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class, self::FIELD_ID);
    }

    protected function dictionary(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true),
            set: fn ($value) => json_encode($value),
        );
    }

    #endregion
}
