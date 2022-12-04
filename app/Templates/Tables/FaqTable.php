<?php

namespace App\Templates\Tables;

#region USE

use App\Constants\Tables;
use App\Constants\Types;
use App\Models\Frontend\Faq;

#endregion

class FaqTable
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            Tables::FIELD_ID =>  Tables::FIELD_MENU,
            Tables::FIELD_HEADER => '',
            Tables::FIELD_MAX_SIZE => 60,
            Tables::FIELD_DISABLE_ORDER => true,
            Tables::FIELD_DISABLE_SORT => true,
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Faq::FIELD_ID,
            Tables::FIELD_ID => Faq::FIELD_ID,
            Tables::FIELD_TYPE => Types::NUMBER,
            Tables::FIELD_HEADER => 'common.ids',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Faq::FIELD_QUESTION,
            Tables::FIELD_ID => Faq::FIELD_QUESTION,
            Tables::FIELD_TYPE => Types::TEXT,
            Tables::FIELD_HEADER => 'common.questions',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Faq::FIELD_ANSWER,
            Tables::FIELD_ID => Faq::FIELD_ANSWER,
            Tables::FIELD_TYPE => Types::TEXT,
            Tables::FIELD_HEADER => 'common.answers',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Faq::CREATED_AT,
            Tables::FIELD_ID => Faq::CREATED_AT,
            Tables::FIELD_TYPE => Types::DATE,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => Faq::UPDATED_AT,
            Tables::FIELD_ID => Faq::UPDATED_AT,
            Tables::FIELD_TYPE => Types::DATE,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_COLUMN_ORDER => [
            Tables::FIELD_MENU,
            Faq::FIELD_ID,
            Faq::FIELD_QUESTION,
            Faq::FIELD_ANSWER,
            Faq::CREATED_AT,
            Faq::UPDATED_AT,
        ],
        Tables::PROPERTY_SORTING => [
            [
                Tables::FIELD_ID => Faq::FIELD_ID,
                Tables::ORDER_DESC => false,
            ],
        ],
    ];

    #endregion
}
