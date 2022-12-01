<?php

namespace App\Models\Frontend;

#region USE

use App\Traits\IsBaseModel;
use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class Faq extends Model
{
    use HasFactory, IsBaseModel, IsFilterable, IsSortable;

    #region CONSTANTS

    public const FIELD_ID = 'id';

    public const FIELD_ANSWER = 'answer';
    public const FIELD_QUESTION = 'question';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_ANSWER,
        self::FIELD_QUESTION,
    ];

    protected $perPage = 10;

    #endregion
}
