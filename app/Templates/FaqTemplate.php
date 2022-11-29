<?php

namespace App\Templates;

#region USE

use App\Constants\TableConstants;
use App\Constants\Types;
use App\Models\Backend\UserSettings;
use App\Models\Frontend\Faq;

#endregion

class FaqTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TableConstants::FIELD_ACCESSOR_KEY => Faq::FIELD_ID,
            TableConstants::FIELD_ID => Faq::FIELD_ID,
            TableConstants::FIELD_TYPE => Types::INTEGER,
            TableConstants::FIELD_HEADER => 'common.ids',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Faq::FIELD_QUESTION,
            TableConstants::FIELD_ID => Faq::FIELD_QUESTION,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.questions',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Faq::FIELD_ANSWER,
            TableConstants::FIELD_ID => Faq::FIELD_ANSWER,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.answers',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Faq::CREATED_AT,
            TableConstants::FIELD_ID => Faq::CREATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => Faq::UPDATED_AT,
            TableConstants::FIELD_ID => Faq::UPDATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        TableConstants::PROPERTY_NAME => UserSettings::FIELD_TEMPLATE_FAQS,
        TableConstants::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        TableConstants::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        TableConstants::FIELD_MENU,
        Faq::FIELD_ID,
        Faq::FIELD_QUESTION,
        Faq::FIELD_ANSWER,
        Faq::CREATED_AT,
        Faq::UPDATED_AT,
    ];

    private const DEFAULT_SORTING = [
        [
            TableConstants::FIELD_ID => Faq::FIELD_ID,
            TableConstants::ORDER_DESC => false,
        ],
    ];

    #endregion
}
