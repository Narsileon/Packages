<?php

namespace App\Services;

#region USE

use App\Constants\Tables;
use App\Models\Backend\Language;

#endregion

class LanguageService
{
    #region CONSTANTS

    public const COLUMNS = array(
        [
            TABLES::FIELD_ACCESSOR_KEY => Language::FIELD_ID,
            TABLES::FIELD_ID => Language::FIELD_ID,
            Tables::FIELD_HEADER => 'common.id',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Language::FIELD_LOCALE,
            TABLES::FIELD_ID => Language::FIELD_LOCALE,
            Tables::FIELD_HEADER => 'common.questions',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => 'language',
            TABLES::FIELD_ID => 'language',
            Tables::FIELD_HEADER => 'common.answers',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Language::FIELD_ACTIVE,
            TABLES::FIELD_ID => Language::FIELD_ACTIVE,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
    );

    public const DEFAULT_TEMPLATE = [
        Tables::ORDER => self::DEFAULT_ORDER,
        Tables::SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        Language::FIELD_ID,
        Language::FIELD_LOCALE,
        'language',
        Language::FIELD_ACTIVE,
    ];

    private const DEFAULT_SORTING = array(
        [
            TABLES::FIELD_ID => Language::FIELD_ID,
            TABLES::FIELD_DESC => false,
        ]
    );
}
