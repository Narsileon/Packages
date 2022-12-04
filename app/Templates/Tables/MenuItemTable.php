<?php

namespace App\Templates\Tables;

#region USE

use App\Constants\Tables;
use App\Constants\Types;
use App\Models\MenuItem;

#endregion

class MenuItemTable
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
            Tables::FIELD_ACCESSOR_KEY => MenuItem::FIELD_ID,
            Tables::FIELD_ID => MenuItem::FIELD_ID,
            Tables::FIELD_TYPE => Types::NUMBER,
            Tables::FIELD_HEADER => 'common.ids',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => MenuItem::FIELD_ACTIVE,
            Tables::FIELD_ID => MenuItem::FIELD_ACTIVE,
            Tables::FIELD_TYPE => Types::NUMBER,
            Tables::FIELD_HEADER => 'common.active',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => MenuItem::FIELD_TYPE,
            Tables::FIELD_ID => MenuItem::FIELD_TYPE,
            Tables::FIELD_TYPE => Types::TEXT,
            Tables::FIELD_HEADER => 'common.types',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => MenuItem::FIELD_ICON,
            Tables::FIELD_ID => MenuItem::FIELD_ICON,
            Tables::FIELD_TYPE => Types::TEXT,
            Tables::FIELD_HEADER => 'common.icons',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => MenuItem::FIELD_LABEL,
            Tables::FIELD_ID => MenuItem::FIELD_LABEL,
            Tables::FIELD_TYPE => Types::TEXT,
            Tables::FIELD_HEADER => 'common.designations',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => MenuItem::FIELD_URL,
            Tables::FIELD_ID => MenuItem::FIELD_URL,
            Tables::FIELD_TYPE => Types::TEXT,
            Tables::FIELD_HEADER => 'common.urls',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => MenuItem::CREATED_AT,
            Tables::FIELD_ID => MenuItem::CREATED_AT,
            Tables::FIELD_TYPE => Types::DATE,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => MenuItem::UPDATED_AT,
            Tables::FIELD_ID => MenuItem::UPDATED_AT,
            Tables::FIELD_TYPE => Types::DATE,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_COLUMN_ORDER => [
            Tables::FIELD_MENU,
            MenuItem::FIELD_ID,
            MenuItem::FIELD_ACTIVE,
            MenuItem::FIELD_TYPE,
            MenuItem::FIELD_ICON,
            MenuItem::FIELD_LABEL,
            MenuItem::FIELD_URL,
            MenuItem::CREATED_AT,
            MenuItem::UPDATED_AT,
        ],
        Tables::PROPERTY_SORTING => [
            [
                Tables::FIELD_ID => MenuItem::FIELD_ID,
                Tables::ORDER_DESC => false,
            ],
        ],
    ];

    #endregion
}
