<?php

namespace App\Templates;

#region USE

use App\Constants\TableConstants;
use App\Constants\Types;
use App\Models\Backend\Order;
use App\Models\Backend\UserSettings;

#endregion

class OrderTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TableConstants::FIELD_ACCESSOR_KEY => Order::FIELD_ID,
            TableConstants::FIELD_ID => Order::FIELD_ID,
            TableConstants::FIELD_TYPE => Types::INTEGER,
            TableConstants::FIELD_HEADER => 'common.ids',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Order::FIELD_TYPE,
            TableConstants::FIELD_ID => Order::FIELD_TYPE,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.types',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Order::FIELD_STATUS,
            TableConstants::FIELD_ID => Order::FIELD_STATUS,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.statuses',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Order::FIELD_ORDER_NUMBER,
            TableConstants::FIELD_ID => Order::FIELD_ORDER_NUMBER,
            TableConstants::FIELD_TYPE => Types::INTEGER,
            TableConstants::FIELD_HEADER => 'common.order_numbers',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Order::FIELD_ORDER_DATE,
            TableConstants::FIELD_ID => Order::FIELD_ORDER_DATE,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'common.order_dates',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Order::FIELD_START_DATE,
            TableConstants::FIELD_ID => Order::FIELD_START_DATE,
            TableConstants::FIELD_TYPE => Types::DATE,
            TableConstants::FIELD_HEADER => 'date-time.start_dates',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Order::FIELD_END_DATE,
            TableConstants::FIELD_ID => Order::FIELD_END_DATE,
            TableConstants::FIELD_TYPE => Types::DATE,
            TableConstants::FIELD_HEADER => 'date-time.end_dates',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Order::FIELD_LOCATION_DEPARTURE,
            TableConstants::FIELD_ID => Order::FIELD_LOCATION_DEPARTURE,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.locations_departure',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Order::FIELD_LOCATION_ARRIVAL,
            TableConstants::FIELD_ID => Order::FIELD_LOCATION_ARRIVAL,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.locations_arrival',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Order::FIELD_PAYMENT_METHOD,
            TableConstants::FIELD_ID => Order::FIELD_PAYMENT_METHOD,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.payment_methods',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Order::CREATED_AT,
            TableConstants::FIELD_ID => Order::CREATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Order::UPDATED_AT,
            TableConstants::FIELD_ID => Order::UPDATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        TableConstants::PROPERTY_NAME => UserSettings::FIELD_TEMPLATE_ORDERS,
        TableConstants::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        TableConstants::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        TableConstants::FIELD_MENU,
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
            TableConstants::FIELD_ID => Order::FIELD_ID,
            TableConstants::ORDER_DESC => false,
        ],
    ];

    #endregion
}
