<?php

namespace App\Templates;

#region USE

use App\Constants\TableConstants;
use App\Constants\Types;
use App\Models\UserTemplates;
use App\Models\MenuItem;

#endregion

class MenuItemTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TableConstants::FIELD_ACCESSOR_KEY => MenuItem::FIELD_ID,
            TableConstants::FIELD_ID => MenuItem::FIELD_ID,
            TableConstants::FIELD_TYPE => Types::INTEGER,
            TableConstants::FIELD_HEADER => 'common.ids',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => MenuItem::FIELD_ACTIVE,
            TableConstants::FIELD_ID => MenuItem::FIELD_ACTIVE,
            TableConstants::FIELD_TYPE => Types::BOOLEAN,
            TableConstants::FIELD_HEADER => 'common.active',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => MenuItem::FIELD_TYPE,
            TableConstants::FIELD_ID => MenuItem::FIELD_TYPE,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.types',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => MenuItem::FIELD_ICON,
            TableConstants::FIELD_ID => MenuItem::FIELD_ICON,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.icons',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => MenuItem::FIELD_LABEL,
            TableConstants::FIELD_ID => MenuItem::FIELD_LABEL,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.designations',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => MenuItem::FIELD_URL,
            TableConstants::FIELD_ID => MenuItem::FIELD_URL,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.urls',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => MenuItem::CREATED_AT,
            TableConstants::FIELD_ID => MenuItem::CREATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => MenuItem::UPDATED_AT,
            TableConstants::FIELD_ID => MenuItem::UPDATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        TableConstants::PROPERTY_NAME => UserTemplates::FIELD_TEMPLATE_MENU_ITEMS,
        TableConstants::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        TableConstants::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        TableConstants::FIELD_MENU,
        MenuItem::FIELD_ID,
        MenuItem::FIELD_ACTIVE,
        MenuItem::FIELD_TYPE,
        MenuItem::FIELD_ICON,
        MenuItem::FIELD_LABEL,
        MenuItem::FIELD_URL,
        MenuItem::CREATED_AT,
        MenuItem::UPDATED_AT,
    ];

    private const DEFAULT_SORTING = [
        [
            TableConstants::FIELD_ID => MenuItem::FIELD_ID,
            TableConstants::ORDER_DESC => false,
        ],
    ];

    #endregion
}
