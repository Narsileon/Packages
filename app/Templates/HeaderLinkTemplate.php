<?php

namespace App\Templates;

#region USE

use App\Constants\TableConstants;
use App\Constants\Types;
use App\Models\UserTemplates;
use App\Models\Frontend\HeaderLink;

#endregion

class HeaderLinkTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TableConstants::FIELD_ACCESSOR_KEY => HeaderLink::FIELD_ID,
            TableConstants::FIELD_ID => HeaderLink::FIELD_ID,
            TableConstants::FIELD_TYPE => Types::INTEGER,
            TableConstants::FIELD_HEADER => 'common.ids',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => HeaderLink::FIELD_LABEL,
            TableConstants::FIELD_ID => HeaderLink::FIELD_LABEL,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.designations',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => HeaderLink::FIELD_URL,
            TableConstants::FIELD_ID => HeaderLink::FIELD_URL,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.urls',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => HeaderLink::FIELD_ACTIVE,
            TableConstants::FIELD_ID => HeaderLink::FIELD_ACTIVE,
            TableConstants::FIELD_TYPE => Types::BOOLEAN,
            TableConstants::FIELD_HEADER => 'common.active',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => HeaderLink::CREATED_AT,
            TableConstants::FIELD_ID => HeaderLink::CREATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => HeaderLink::UPDATED_AT,
            TableConstants::FIELD_ID => HeaderLink::UPDATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        TableConstants::PROPERTY_NAME => UserTemplates::FIELD_TEMPLATE_HEADER_LINKS,
        TableConstants::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        TableConstants::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        TableConstants::FIELD_MENU,
        HeaderLink::FIELD_ID,
        HeaderLink::FIELD_LABEL,
        HeaderLink::FIELD_URL,
        HeaderLink::FIELD_ACTIVE,
        HeaderLink::CREATED_AT,
        HeaderLink::UPDATED_AT,
    ];

    private const DEFAULT_SORTING = [
        [
            TableConstants::FIELD_ID => HeaderLink::FIELD_ID,
            TableConstants::ORDER_DESC => false,
        ],
    ];

    #endregion
}
