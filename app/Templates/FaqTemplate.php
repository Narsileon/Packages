<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Models\Backend\Template;
use App\Models\Frontend\Faq;

#endregion

class FaqTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TABLES::FIELD_ACCESSOR_KEY => Faq::FIELD_ID,
            TABLES::FIELD_ID => Faq::FIELD_ID,
            Tables::FIELD_HEADER => 'common.id',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Faq::FIELD_QUESTION,
            TABLES::FIELD_ID => Faq::FIELD_QUESTION,
            Tables::FIELD_HEADER => 'common.questions',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Faq::FIELD_ANSWER,
            TABLES::FIELD_ID => Faq::FIELD_ANSWER,
            Tables::FIELD_HEADER => 'common.answers',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Faq::CREATED_AT,
            TABLES::FIELD_ID => Faq::CREATED_AT,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => Faq::UPDATED_AT,
            TABLES::FIELD_ID => Faq::UPDATED_AT,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => Template::FIELD_FAQS,
        Tables::PROPERTY_ORDER => self::DEFAULT_ORDER,
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
            TABLES::FIELD_ID => Faq::FIELD_ID,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
