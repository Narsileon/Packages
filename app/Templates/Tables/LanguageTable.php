<?php

namespace App\Templates\Tables;

#region USE

use App\Constants\Tables;
use App\Constants\Types;
use App\Models\Backend\Language;

#endregion

class LanguageTable
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            Tables::FIELD_ACCESSOR_KEY => Language::FIELD_ID,
            Tables::FIELD_ID => Language::FIELD_ID,
            Tables::FIELD_TYPE => Types::NUMBER,
            Tables::FIELD_HEADER => 'common.ids',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Language::FIELD_CODE,
            Tables::FIELD_ID => Language::FIELD_CODE,
            Tables::FIELD_TYPE => Types::TEXT,
            Tables::FIELD_HEADER => 'common.codes',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Language::PROPERTY_LANGUAGE,
            Tables::FIELD_ID => Language::PROPERTY_LANGUAGE,
            Tables::FIELD_TYPE => Types::TEXT,
            Tables::FIELD_HEADER => 'common.languages',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Language::FIELD_ACTIVE,
            Tables::FIELD_ID => Language::FIELD_ACTIVE,
            Tables::FIELD_TYPE => Types::NUMBER,
            Tables::FIELD_HEADER => 'common.active',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_COLUMN_ORDER => [
            Language::FIELD_ID,
            Language::FIELD_CODE,
            Language::PROPERTY_LANGUAGE,
            Language::FIELD_ACTIVE,
        ],
        Tables::PROPERTY_SORTING => [
            [
                Tables::FIELD_ID => Language::FIELD_ID,
                Tables::ORDER_DESC => false,
            ],
        ],
    ];

    #endregion
}
