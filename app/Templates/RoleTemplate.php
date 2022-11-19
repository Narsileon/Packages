<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Models\Backend\Template;
use App\Models\UserRole;

#endregion

class RoleTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TABLES::FIELD_ACCESSOR_KEY => UserRole::FIELD_ID,
            TABLES::FIELD_ID => UserRole::FIELD_ID,
            Tables::FIELD_HEADER => 'common.id',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => UserRole::FIELD_NAME,
            TABLES::FIELD_ID => UserRole::FIELD_NAME,
            Tables::FIELD_HEADER => 'validation.attributes.name',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => UserRole::CREATED_AT,
            TABLES::FIELD_ID => UserRole::CREATED_AT,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => UserRole::UPDATED_AT,
            TABLES::FIELD_ID => UserRole::UPDATED_AT,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => Template::FIELD_ROLES,
        Tables::PROPERTY_ORDER => self::DEFAULT_ORDER,
        Tables::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        Tables::FIELD_MENU,
        UserRole::FIELD_ID,
        UserRole::FIELD_NAME,
        UserRole::CREATED_AT,
        UserRole::UPDATED_AT,
    ];

    private const DEFAULT_SORTING = [
        [
            TABLES::FIELD_ID => UserRole::FIELD_ID,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
