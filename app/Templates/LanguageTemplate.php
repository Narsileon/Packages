<?php

namespace App\Templates;

#region USE

use App\Constants\TableConstants;
use App\Constants\Types;
use App\Models\Backend\Language;
use App\Models\Backend\UserSettings;

#endregion

class LanguageTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TableConstants::FIELD_ACCESSOR_KEY => Language::FIELD_ID,
            TableConstants::FIELD_ID => Language::FIELD_ID,
            TableConstants::FIELD_TYPE => Types::INTEGER,
            TableConstants::FIELD_HEADER => 'common.ids',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Language::FIELD_CODE,
            TableConstants::FIELD_ID => Language::FIELD_CODE,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.codes',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Language::PROPERTY_LANGUAGE,
            TableConstants::FIELD_ID => Language::PROPERTY_LANGUAGE,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.languages',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Language::FIELD_ACTIVE,
            TableConstants::FIELD_ID => Language::FIELD_ACTIVE,
            TableConstants::FIELD_TYPE => Types::BOOLEAN,
            TableConstants::FIELD_HEADER => 'common.active',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        TableConstants::PROPERTY_NAME => UserSettings::FIELD_LANGUAGES,
        TableConstants::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        TableConstants::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        Language::FIELD_ID,
        Language::FIELD_CODE,
        Language::PROPERTY_LANGUAGE,
        Language::FIELD_ACTIVE,
    ];

    private const DEFAULT_SORTING = [
        [
            TableConstants::FIELD_ID => Language::FIELD_ID,
            TableConstants::ORDER_DESC => false,
        ],
    ];

    #endregion
}
