<?php

namespace App\Models\Web;

#region USE

use App\Traits\IsBaseModel;
use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class FooterLink extends Model
{
    use HasFactory, IsBaseModel, IsFilterable, IsSortable;

    #region CONSTANTS

    const FIELD_ID = 'id';
    const FIELD_LABEL = 'label';
    const FIELD_URL = 'url';
    const FIELD_ACTIVE = 'active';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_LABEL,
        self::FIELD_URL,
        self::FIELD_ACTIVE
    ];

    #endregion
}
