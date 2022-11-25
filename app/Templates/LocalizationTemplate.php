<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Models\Backend\UserSettings;

#endregion

class LocalizationTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TABLES::FIELD_ACCESSOR_KEY => Tables::FIELD_TYPE,
            TABLES::FIELD_ID => Tables::FIELD_TYPE,
            Tables::FIELD_HEADER => 'common.types',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Tables::FIELD_KEY,
            TABLES::FIELD_ID => Tables::FIELD_KEY,
            Tables::FIELD_HEADER => 'common.keys',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Tables::FIELD_VALUE,
            TABLES::FIELD_ID => Tables::FIELD_VALUE,
            Tables::FIELD_HEADER => 'common.values',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Tables::FIELD_CUSTOM_VALUE,
            TABLES::FIELD_ID => Tables::FIELD_CUSTOM_VALUE,
            Tables::FIELD_HEADER => 'common.custom_values',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => UserSettings::FIELD_LOCALIZATIONS,
        Tables::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        Tables::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        Tables::FIELD_TYPE,
        Tables::FIELD_KEY,
        Tables::FIELD_VALUE,
        Tables::FIELD_CUSTOM_VALUE,
    ];

    private const DEFAULT_SORTING = [
        [
            TABLES::FIELD_ID => Tables::FIELD_KEY,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
