<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Models\Backend\Template;
use App\Models\Frontend\HeaderLink;

#endregion

class HeaderLinkTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TABLES::FIELD_ACCESSOR_KEY => HeaderLink::FIELD_ID,
            TABLES::FIELD_ID => HeaderLink::FIELD_ID,
            Tables::FIELD_HEADER => 'common.id',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => HeaderLink::FIELD_LABEL,
            TABLES::FIELD_ID => HeaderLink::FIELD_LABEL,
            Tables::FIELD_HEADER => 'validation.attributes.label',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => HeaderLink::FIELD_URL,
            TABLES::FIELD_ID => HeaderLink::FIELD_URL,
            Tables::FIELD_HEADER => 'validation.attributes.url',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => HeaderLink::FIELD_ACTIVE,
            TABLES::FIELD_ID => HeaderLink::FIELD_ACTIVE,
            Tables::FIELD_HEADER => 'common.active',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => HeaderLink::CREATED_AT,
            TABLES::FIELD_ID => HeaderLink::CREATED_AT,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => HeaderLink::UPDATED_AT,
            TABLES::FIELD_ID => HeaderLink::UPDATED_AT,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => Template::FIELD_HEADER_LINKS,
        Tables::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        Tables::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        Tables::FIELD_MENU,
        HeaderLink::FIELD_ID,
        HeaderLink::FIELD_LABEL,
        HeaderLink::FIELD_URL,
        HeaderLink::FIELD_ACTIVE,
        HeaderLink::CREATED_AT,
        HeaderLink::UPDATED_AT,
    ];

    private const DEFAULT_SORTING = [
        [
            TABLES::FIELD_ID => HeaderLink::FIELD_ID,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
