<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Models\Backend\Language;
use App\Models\Backend\Template;

#endregion

class LanguageTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TABLES::FIELD_ACCESSOR_KEY => Language::FIELD_ID,
            TABLES::FIELD_ID => Language::FIELD_ID,
            Tables::FIELD_HEADER => 'common.id',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Language::FIELD_CODE,
            TABLES::FIELD_ID => Language::FIELD_CODE,
            Tables::FIELD_HEADER => 'common.codes',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Language::PROPERTY_LANGUAGE,
            TABLES::FIELD_ID => Language::PROPERTY_LANGUAGE,
            Tables::FIELD_HEADER => 'common.languages',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Language::FIELD_ACTIVE,
            TABLES::FIELD_ID => Language::FIELD_ACTIVE,
            Tables::FIELD_HEADER => 'common.active',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => Template::FIELD_LANGUAGES,
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
            TABLES::FIELD_ID => Language::FIELD_ID,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
