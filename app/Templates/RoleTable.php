<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Constants\Types;
use App\Models\UserRole;

#endregion

class RoleTable
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
            Tables::FIELD_ACCESSOR_KEY => UserRole::FIELD_ID,
            Tables::FIELD_ID => UserRole::FIELD_ID,
            Tables::FIELD_TYPE => Types::NUMBER,
            Tables::FIELD_HEADER => 'common.ids',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => UserRole::FIELD_NAME,
            Tables::FIELD_ID => UserRole::FIELD_NAME,
            Tables::FIELD_TYPE => Types::TEXT,
            Tables::FIELD_HEADER => 'common.names',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => UserRole::CREATED_AT,
            Tables::FIELD_ID => UserRole::CREATED_AT,
            Tables::FIELD_TYPE => Types::DATE,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => UserRole::UPDATED_AT,
            Tables::FIELD_ID => UserRole::UPDATED_AT,
            Tables::FIELD_TYPE => Types::DATE,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_COLUMN_ORDER => [
            Tables::FIELD_MENU,
            UserRole::FIELD_ID,
            UserRole::FIELD_NAME,
            UserRole::CREATED_AT,
            UserRole::UPDATED_AT,
        ],
        Tables::PROPERTY_SORTING => [
            [
                Tables::FIELD_ID => UserRole::FIELD_ID,
                Tables::ORDER_DESC => false,
            ],
        ],
    ];

    #endregion
}
