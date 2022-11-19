<?php

namespace App\Models\Backend;

#region USE

use App\Traits\IsBaseModel;
use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class Order extends Model
{
    use HasFactory, IsBaseModel, IsFilterable, IsSortable;

    #region CONSTANTS

    public const FIELD_ID = 'id';
    public const FIELD_TYPE = 'type';
    public const FIELD_STATUS = 'status';
    public const FIELD_ORDER_NUMBER = 'order_number';
    public const FIELD_ORDER_DATE = 'order_date';
    public const FIELD_START_DATE = 'start_date';
    public const FIELD_END_DATE = 'end_date';
    public const FIELD_START_LOCATION = 'start_location';
    public const FIELD_END_LOCATION = 'end_location';
    public const FIELD_PAYMENT_METHOD = 'payment_method';

    #endregion

    #region PROPERTIES

    protected $fillable =
    [
        self::FIELD_TYPE,
        self::FIELD_STATUS,
        self::FIELD_ORDER_NUMBER,
        self::FIELD_ORDER_DATE,
        self::FIELD_START_DATE,
        self::FIELD_END_DATE,
        self::FIELD_START_LOCATION,
        self::FIELD_END_LOCATION,
        self::FIELD_PAYMENT_METHOD,
    ];

    protected $perPage = 10;

    #endregion
}
