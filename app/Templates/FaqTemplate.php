<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Constants\Types;
use App\Models\Backend\UserSettings;
use App\Models\Frontend\Faq;

#endregion

class FaqTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            Tables::FIELD_ACCESSOR_KEY => Faq::FIELD_ID,
            Tables::FIELD_ID => Faq::FIELD_ID,
            Tables::FIELD_TYPE => Types::INTEGER,
            Tables::FIELD_HEADER => 'common.ids',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Faq::FIELD_QUESTION,
            Tables::FIELD_ID => Faq::FIELD_QUESTION,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.questions',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Faq::FIELD_ANSWER,
            Tables::FIELD_ID => Faq::FIELD_ANSWER,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.answers',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Faq::CREATED_AT,
            Tables::FIELD_ID => Faq::CREATED_AT,
            Tables::FIELD_TYPE => Types::DATETIME,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Faq::UPDATED_AT,
            Tables::FIELD_ID => Faq::UPDATED_AT,
            Tables::FIELD_TYPE => Types::DATETIME,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => UserSettings::FIELD_FAQS,
        Tables::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        Tables::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        Tables::FIELD_MENU,
        Faq::FIELD_ID,
        Faq::FIELD_QUESTION,
        Faq::FIELD_ANSWER,
        Faq::CREATED_AT,
        Faq::UPDATED_AT,
    ];

    private const DEFAULT_SORTING = [
        [
            Tables::FIELD_ID => Faq::FIELD_ID,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
