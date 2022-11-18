<?php

namespace App\Models\Backend;

#region USE

use App\Constants\CastTypes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#endregion

class Template extends Model
{
    use HasFactory;

    #region CONSTANTS

    const FIELD_ID = 'id';
    const FIELD_USER_ID='user_id';
    const FIELD_TEMPLATE_FAQ = 'faq_template';

    const PROPERTY_USER = 'user';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_USER_ID,
        self::FIELD_TEMPLATE_FAQ,
    ];

    protected $casts = [
        self::FIELD_TEMPLATE_FAQ => CastTypes::ARRAY,
    ];

    protected $perPage = 10;

    #endregion

    #region PUBLIC METHODS

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class, self::FIELD_ID);
    }

    protected function faq_template(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true),
            set: fn ($value) => json_encode($value),
        );
    }

    #endregion
}
