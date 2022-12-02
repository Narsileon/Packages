<?php

namespace App\Templates\Tables;

#region USE

use App\Constants\Tables;
use App\Constants\Types;
use App\Models\User;

#endregion

class UserTable
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            Tables::FIELD_ACCESSOR_KEY => User::FIELD_ID,
            Tables::FIELD_ID => User::FIELD_ID,
            Tables::FIELD_TYPE => Types::INTEGER,
            Tables::FIELD_HEADER => 'common.ids',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => User::FIELD_USERNAME,
            Tables::FIELD_ID => User::FIELD_USERNAME,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.usernames',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => User::FIELD_EMAIL,
            Tables::FIELD_ID => User::FIELD_EMAIL,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.emails',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => User::FIELD_LAST_NAME,
            Tables::FIELD_ID => User::FIELD_LAST_NAME,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.last_names',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => User::FIELD_FIRST_NAME,
            Tables::FIELD_ID => User::FIELD_FIRST_NAME,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.first_names',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => User::CREATED_AT,
            Tables::FIELD_ID => User::CREATED_AT,
            Tables::FIELD_TYPE => Types::DATETIME,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => User::UPDATED_AT,
            Tables::FIELD_ID => User::UPDATED_AT,
            Tables::FIELD_TYPE => Types::DATETIME,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_COLUMN_ORDER => [
            Tables::FIELD_MENU,
            User::FIELD_ID,
            User::FIELD_USERNAME,
            User::FIELD_EMAIL,
            User::FIELD_LAST_NAME,
            User::FIELD_FIRST_NAME,
            User::CREATED_AT,
            User::UPDATED_AT,
        ],
        Tables::PROPERTY_SORTING => [
            [
                Tables::FIELD_ID => User::FIELD_ID,
                Tables::ORDER_DESC => false,
            ],
        ],
    ];

    #endregion
}
