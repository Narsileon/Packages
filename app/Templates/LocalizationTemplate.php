<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Models\Backend\Template;

#endregion

class LanguageTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
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
            TABLES::FIELD_ACCESSOR_KEY => Tables::CUSTOM_VALUE,
            TABLES::FIELD_ID => Tables::CUSTOM_VALUE,
            Tables::FIELD_HEADER => 'common.custom_values',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => Template::FIELD_LANGUAGES,
        Tables::PROPERTY_ORDER => self::DEFAULT_ORDER,
        Tables::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        Tables::FIELD_KEY,
        Tables::FIELD_VALUE,
        Tables::CUSTOM_VALUE,
    ];

    private const DEFAULT_SORTING = [
        [
            TABLES::FIELD_ID => Tables::FIELD_KEY,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
