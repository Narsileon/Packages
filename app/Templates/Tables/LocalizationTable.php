<?php

namespace App\Templates\Tables;

#region USE

use App\Constants\Tables;
use App\Constants\Types;

#endregion

class LocalizationTable
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            Tables::FIELD_ACCESSOR_KEY => Tables::FIELD_PATH,
            Tables::FIELD_ID => Tables::FIELD_PATH,
            Tables::FIELD_TYPE => Types::TEXT,
            Tables::FIELD_HEADER => 'common.paths',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Tables::FIELD_KEY,
            Tables::FIELD_ID => Tables::FIELD_KEY,
            Tables::FIELD_TYPE => Types::TEXT,
            Tables::FIELD_HEADER => 'common.keys',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Tables::FIELD_VALUE,
            Tables::FIELD_ID => Tables::FIELD_VALUE,
            Tables::FIELD_TYPE => Types::TEXT,
            Tables::FIELD_HEADER => 'common.values',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_COLUMN_ORDER => [
            Tables::FIELD_PATH,
            Tables::FIELD_KEY,
            Tables::FIELD_VALUE,
        ],
        Tables::PROPERTY_SORTING => [
            [
                Tables::FIELD_ID => Tables::FIELD_KEY,
                Tables::ORDER_DESC => false,
            ],
        ],
    ];

    #endregion
}
