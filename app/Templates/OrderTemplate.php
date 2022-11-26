<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Constants\Types;
use App\Models\Backend\Order;
use App\Models\Backend\UserSettings;

#endregion

class OrderTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            Tables::FIELD_ACCESSOR_KEY => Order::FIELD_ID,
            Tables::FIELD_ID => Order::FIELD_ID,
            Tables::FIELD_TYPE => Types::INTEGER,
            Tables::FIELD_HEADER => 'common.ids',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Order::FIELD_TYPE,
            Tables::FIELD_ID => Order::FIELD_TYPE,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.types',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Order::FIELD_STATUS,
            Tables::FIELD_ID => Order::FIELD_STATUS,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.statuses',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Order::FIELD_ORDER_NUMBER,
            Tables::FIELD_ID => Order::FIELD_ORDER_NUMBER,
            Tables::FIELD_TYPE => Types::INTEGER,
            Tables::FIELD_HEADER => 'common.order_numbers',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Order::FIELD_ORDER_DATE,
            Tables::FIELD_ID => Order::FIELD_ORDER_DATE,
            Tables::FIELD_TYPE => Types::DATETIME,
            Tables::FIELD_HEADER => 'common.order_dates',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Order::FIELD_START_DATE,
            Tables::FIELD_ID => Order::FIELD_START_DATE,
            Tables::FIELD_TYPE => Types::DATE,
            Tables::FIELD_HEADER => 'date-time.start_dates',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Order::FIELD_END_DATE,
            Tables::FIELD_ID => Order::FIELD_END_DATE,
            Tables::FIELD_TYPE => Types::DATE,
            Tables::FIELD_HEADER => 'date-time.end_dates',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Order::FIELD_LOCATION_DEPARTURE,
            Tables::FIELD_ID => Order::FIELD_LOCATION_DEPARTURE,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.locations_departure',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Order::FIELD_LOCATION_ARRIVAL,
            Tables::FIELD_ID => Order::FIELD_LOCATION_ARRIVAL,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.locations_arrival',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Order::FIELD_PAYMENT_METHOD,
            Tables::FIELD_ID => Order::FIELD_PAYMENT_METHOD,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.payment_methods',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Order::CREATED_AT,
            Tables::FIELD_ID => Order::CREATED_AT,
            Tables::FIELD_TYPE => Types::DATETIME,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Order::UPDATED_AT,
            Tables::FIELD_ID => Order::UPDATED_AT,
            Tables::FIELD_TYPE => Types::DATETIME,
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
            Tables::FIELD_ID => Order::FIELD_ID,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
