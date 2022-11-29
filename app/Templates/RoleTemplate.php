<?php

namespace App\Templates;

#region USE

use App\Constants\TableConstants;
use App\Constants\Types;
use App\Models\Backend\UserSettings;
use App\Models\UserRole;

#endregion

class RoleTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TableConstants::FIELD_ACCESSOR_KEY => UserRole::FIELD_ID,
            TableConstants::FIELD_ID => UserRole::FIELD_ID,
            TableConstants::FIELD_TYPE => Types::INTEGER,
            TableConstants::FIELD_HEADER => 'common.ids',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => UserRole::FIELD_NAME,
            TableConstants::FIELD_ID => UserRole::FIELD_NAME,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.names',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => UserRole::CREATED_AT,
            TableConstants::FIELD_ID => UserRole::CREATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => UserRole::UPDATED_AT,
            TableConstants::FIELD_ID => UserRole::UPDATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        TableConstants::PROPERTY_NAME => UserSettings::FIELD_TEMPLATE_ROLES,
        TableConstants::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        TableConstants::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        TableConstants::FIELD_MENU,
        UserRole::FIELD_ID,
        UserRole::FIELD_NAME,
        UserRole::CREATED_AT,
        UserRole::UPDATED_AT,
    ];

    private const DEFAULT_SORTING = [
        [
            TableConstants::FIELD_ID => UserRole::FIELD_ID,
            TableConstants::ORDER_DESC => false,
        ],
    ];

    #endregion
}
