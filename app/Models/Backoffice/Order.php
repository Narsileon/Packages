<?php

namespace App\Models\Backoffice;

#region USE

use App\Traits\IsFilterable;
use App\Traits\IsSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#endregion

class Order extends Model
{
    use HasFactory, IsFilterable, IsSortable;

    #region CONSTANTS

    const FIELD_ID = 'id';
    const FIELD_TYPE = 'type';
    const FIELD_STATUS = 'status';
    const FIELD_ORDER_NUMBER = 'order_number';
    const FIELD_ORDER_DATE = 'order_date';
    const FIELD_START_DATE = 'start_date';
    const FIELD_END_DATE = 'end_date';
    const FIELD_START_LOCATION = 'start_location';
    const FIELD_END_LOCATION = 'end_location';
    const FIELD_PAYMENT_METHOD = 'payment_method';

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
