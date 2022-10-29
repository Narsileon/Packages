<?php

namespace App\Models\Web;

#region USE

use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class Faq extends Model
{
    use HasFactory, IsFilterable, IsSortable;

    #region CONSTANTS

    const FIELD_ID = 'id';
    const FIELD_QUESTION = 'question';
    const FIELD_ANSWER = 'answer';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_QUESTION,
        self::FIELD_ANSWER,
    ];

    protected $perPage = 10;

    #endregion
}
