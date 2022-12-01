<?php

namespace App\Templates;

#region USE

use App\Constants\TableConstants;
use App\Constants\Types;
use App\Models\UserTemplates;

#endregion

class LocalizationTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TableConstants::FIELD_ACCESSOR_KEY => TableConstants::FIELD_TYPE,
            TableConstants::FIELD_ID => TableConstants::FIELD_TYPE,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.types',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => TableConstants::FIELD_KEY,
            TableConstants::FIELD_ID => TableConstants::FIELD_KEY,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.keys',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => TableConstants::FIELD_VALUE,
            TableConstants::FIELD_ID => TableConstants::FIELD_VALUE,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.values',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => TableConstants::FIELD_CUSTOM_VALUE,
            TableConstants::FIELD_ID => TableConstants::FIELD_CUSTOM_VALUE,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.custom_values',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        TableConstants::PROPERTY_NAME => UserTemplates::FIELD_TEMPLATE_LOCALIZATIONS,
        TableConstants::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        TableConstants::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        TableConstants::FIELD_TYPE,
        TableConstants::FIELD_KEY,
        TableConstants::FIELD_VALUE,
        TableConstants::FIELD_CUSTOM_VALUE,
    ];

    private const DEFAULT_SORTING = [
        [
            TableConstants::FIELD_ID => TableConstants::FIELD_KEY,
            TableConstants::ORDER_DESC => false,
        ],
    ];

    #endregion
}
