<?php

namespace App\Templates;

#region USE

use App\Constants\TableConstants;
use App\Constants\Types;
use App\Models\Backend\UserSettings;
use App\Models\User;

#endregion

class UserTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TableConstants::FIELD_ACCESSOR_KEY => User::FIELD_ID,
            TableConstants::FIELD_ID => User::FIELD_ID,
            TableConstants::FIELD_TYPE => Types::INTEGER,
            TableConstants::FIELD_HEADER => 'common.ids',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => User::FIELD_USERNAME,
            TableConstants::FIELD_ID => User::FIELD_USERNAME,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.usernames',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => User::FIELD_EMAIL,
            TableConstants::FIELD_ID => User::FIELD_EMAIL,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.emails',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => User::FIELD_LAST_NAME,
            TableConstants::FIELD_ID => User::FIELD_LAST_NAME,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.last_names',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => User::FIELD_FIRST_NAME,
            TableConstants::FIELD_ID => User::FIELD_FIRST_NAME,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.first_names',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => User::CREATED_AT,
            TableConstants::FIELD_ID => User::CREATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => User::UPDATED_AT,
            TableConstants::FIELD_ID => User::UPDATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        TableConstants::PROPERTY_NAME => UserSettings::FIELD_USERS,
        TableConstants::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        TableConstants::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        TableConstants::FIELD_MENU,
        User::FIELD_ID,
        User::FIELD_USERNAME,
        User::FIELD_EMAIL,
        User::FIELD_LAST_NAME,
        User::FIELD_FIRST_NAME,
        User::CREATED_AT,
        User::UPDATED_AT,
    ];

    private const DEFAULT_SORTING = [
        [
            TableConstants::FIELD_ID => User::FIELD_ID,
            TableConstants::ORDER_DESC => false,
        ],
    ];

    #endregion
}
