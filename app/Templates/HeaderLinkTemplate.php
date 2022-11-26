<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Constants\Types;
use App\Models\Backend\UserSettings;
use App\Models\Frontend\HeaderLink;

#endregion

class HeaderLinkTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            Tables::FIELD_ACCESSOR_KEY => HeaderLink::FIELD_ID,
            Tables::FIELD_ID => HeaderLink::FIELD_ID,
            Tables::FIELD_TYPE => Types::INTEGER,
            Tables::FIELD_HEADER => 'common.ids',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => HeaderLink::FIELD_LABEL,
            Tables::FIELD_ID => HeaderLink::FIELD_LABEL,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.designations',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => HeaderLink::FIELD_URL,
            Tables::FIELD_ID => HeaderLink::FIELD_URL,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.urls',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => HeaderLink::FIELD_ACTIVE,
            Tables::FIELD_ID => HeaderLink::FIELD_ACTIVE,
            Tables::FIELD_TYPE => Types::BOOLEAN,
            Tables::FIELD_HEADER => 'common.active',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => HeaderLink::CREATED_AT,
            Tables::FIELD_ID => HeaderLink::CREATED_AT,
            Tables::FIELD_TYPE => Types::DATETIME,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => HeaderLink::UPDATED_AT,
            Tables::FIELD_ID => HeaderLink::UPDATED_AT,
            Tables::FIELD_TYPE => Types::DATETIME,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => UserSettings::FIELD_HEADER_LINKS,
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
            Tables::FIELD_ID => HeaderLink::FIELD_ID,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
