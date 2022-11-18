<?php

namespace App\Models\Backend;

#region USE

use App\Constants\CastTypes;
use App\Services\FaqService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Query\Expression;

#endregion

class Template extends Model
{
    use HasFactory;

    #region CONSTANTS

    const FIELD_ID = 'id';
    const FIELD_USER_ID='user_id';
    const FIELD_TEMPLATE_FAQ = 'faq_template';
    const FIELD_TEMPLATE_LANGUAGE = 'language_template';

    const PROPERTY_USER = 'user';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_USER_ID,
        self::FIELD_TEMPLATE_FAQ,
        self::FIELD_TEMPLATE_LANGUAGE,
    ];

    protected $casts = [
        self::FIELD_TEMPLATE_FAQ => CastTypes::ARRAY,
        self::FIELD_TEMPLATE_LANGUAGE => CastTypes::ARRAY,
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
