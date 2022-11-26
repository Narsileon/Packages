<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Constants\Types;
use App\Models\Backend\Language;
use App\Models\Backend\UserSettings;

#endregion

class LanguageTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            Tables::FIELD_ACCESSOR_KEY => Language::FIELD_ID,
            Tables::FIELD_ID => Language::FIELD_ID,
            Tables::FIELD_TYPE => Types::INTEGER,
            Tables::FIELD_HEADER => 'common.ids',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Language::FIELD_CODE,
            Tables::FIELD_ID => Language::FIELD_CODE,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.codes',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Language::PROPERTY_LANGUAGE,
            Tables::FIELD_ID => Language::PROPERTY_LANGUAGE,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.languages',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Language::FIELD_ACTIVE,
            Tables::FIELD_ID => Language::FIELD_ACTIVE,
            Tables::FIELD_TYPE => Types::BOOLEAN,
            Tables::FIELD_HEADER => 'common.active',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => UserSettings::FIELD_LANGUAGES,
        Tables::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        Tables::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        Language::FIELD_ID,
        Language::FIELD_CODE,
        Language::PROPERTY_LANGUAGE,
        Language::FIELD_ACTIVE,
    ];

    private const DEFAULT_SORTING = [
        [
            Tables::FIELD_ID => Language::FIELD_ID,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
