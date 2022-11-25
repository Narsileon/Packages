<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Models\Backend\Order;
use App\Models\Backend\UserSettings;

#endregion

class OrderTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TABLES::FIELD_ACCESSOR_KEY => Order::FIELD_ID,
            TABLES::FIELD_ID => Order::FIELD_ID,
            Tables::FIELD_HEADER => 'common.ids',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Order::FIELD_TYPE,
            TABLES::FIELD_ID => Order::FIELD_TYPE,
            Tables::FIELD_HEADER => 'common.types',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Order::FIELD_STATUS,
            TABLES::FIELD_ID => Order::FIELD_STATUS,
            Tables::FIELD_HEADER => 'common.statuses',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Order::FIELD_ORDER_NUMBER,
            TABLES::FIELD_ID => Order::FIELD_ORDER_NUMBER,
            Tables::FIELD_HEADER => 'common.order_numbers',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Order::FIELD_ORDER_DATE,
            TABLES::FIELD_ID => Order::FIELD_ORDER_DATE,
            Tables::FIELD_HEADER => 'common.order_dates',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Order::FIELD_START_DATE,
            TABLES::FIELD_ID => Order::FIELD_START_DATE,
            Tables::FIELD_HEADER => 'date-time.start_dates',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Order::FIELD_END_DATE,
            TABLES::FIELD_ID => Order::FIELD_END_DATE,
            Tables::FIELD_HEADER => 'date-time.end_dates',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Order::FIELD_LOCATION_DEPARTURE,
            TABLES::FIELD_ID => Order::FIELD_LOCATION_DEPARTURE,
            Tables::FIELD_HEADER => 'common.locations_departure',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Order::FIELD_LOCATION_ARRIVAL,
            TABLES::FIELD_ID => Order::FIELD_LOCATION_ARRIVAL,
            Tables::FIELD_HEADER => 'common.locations_arrival',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Order::FIELD_PAYMENT_METHOD,
            TABLES::FIELD_ID => Order::FIELD_PAYMENT_METHOD,
            Tables::FIELD_HEADER => 'common.payment_methods',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Order::CREATED_AT,
            TABLES::FIELD_ID => Order::CREATED_AT,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Order::UPDATED_AT,
            TABLES::FIELD_ID => Order::UPDATED_AT,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => UserSettings::FIELD_ORDERS,
        Tables::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        Tables::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        Tables::FIELD_MENU,
        Order::FIELD_ID,
        Order::FIELD_TYPE,
        Order::FIELD_STATUS,
        Order::FIELD_ORDER_NUMBER,
        Order::FIELD_ORDER_DATE,
        Order::FIELD_START_DATE,
        Order::FIELD_END_DATE,
        Order::FIELD_LOCATION_DEPARTURE,
        Order::FIELD_LOCATION_ARRIVAL,
        Order::FIELD_PAYMENT_METHOD,
        Order::CREATED_AT,
        Order::UPDATED_AT,
    ];

    private const DEFAULT_SORTING = [
        [
            TABLES::FIELD_ID => Order::FIELD_ID,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
