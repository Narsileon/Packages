<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Models\Backend\Template;
use App\Models\Frontend\FooterLink;

#endregion

class FooterLinkTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TABLES::FIELD_ACCESSOR_KEY => FooterLink::FIELD_ID,
            TABLES::FIELD_ID => FooterLink::FIELD_ID,
            Tables::FIELD_HEADER => 'common.id',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => FooterLink::FIELD_LABEL,
            TABLES::FIELD_ID => FooterLink::FIELD_LABEL,
            Tables::FIELD_HEADER => 'validation.attributes.label',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => FooterLink::FIELD_URL,
            TABLES::FIELD_ID => FooterLink::FIELD_URL,
            Tables::FIELD_HEADER => 'validation.attributes.url',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => FooterLink::FIELD_ACTIVE,
            TABLES::FIELD_ID => FooterLink::FIELD_ACTIVE,
            Tables::FIELD_HEADER => 'common.active',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => FooterLink::CREATED_AT,
            TABLES::FIELD_ID => FooterLink::CREATED_AT,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => FooterLink::UPDATED_AT,
            TABLES::FIELD_ID => FooterLink::UPDATED_AT,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => Template::FIELD_FOOTER_LINKS,
        Tables::PROPERTY_ORDER => self::DEFAULT_ORDER,
        Tables::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        Tables::FIELD_MENU,
        FooterLink::FIELD_ID,
        FooterLink::FIELD_LABEL,
        FooterLink::FIELD_URL,
        FooterLink::FIELD_ACTIVE,
        FooterLink::CREATED_AT,
        FooterLink::UPDATED_AT,
    ];

    private const DEFAULT_SORTING = [
        [
            TABLES::FIELD_ID => FooterLink::FIELD_ID,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
