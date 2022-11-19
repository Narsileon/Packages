<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Models\Backend\Template;
use App\Models\User;

#endregion

class UserTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TABLES::FIELD_ACCESSOR_KEY => User::FIELD_ID,
            TABLES::FIELD_ID => User::FIELD_ID,
            Tables::FIELD_HEADER => 'common.id',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => User::FIELD_USERNAME,
            TABLES::FIELD_ID => User::FIELD_USERNAME,
            Tables::FIELD_HEADER => 'validation.attributes.username',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => User::FIELD_EMAIL,
            TABLES::FIELD_ID => User::FIELD_EMAIL,
            Tables::FIELD_HEADER => 'validation.attributes.email',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => User::FIELD_LAST_NAME,
            TABLES::FIELD_ID => User::FIELD_LAST_NAME,
            Tables::FIELD_HEADER => 'validation.attributes.last_name',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => User::FIELD_FIRST_NAME,
            TABLES::FIELD_ID => User::FIELD_FIRST_NAME,
            Tables::FIELD_HEADER => 'validation.attributes.first_name',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => User::CREATED_AT,
            TABLES::FIELD_ID => User::CREATED_AT,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TABLES::FIELD_ACCESSOR_KEY => User::UPDATED_AT,
            TABLES::FIELD_ID => User::UPDATED_AT,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => Template::FIELD_USERS,
        Tables::PROPERTY_ORDER => self::DEFAULT_ORDER,
        Tables::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        Tables::FIELD_MENU,
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
            TABLES::FIELD_ID => User::FIELD_ID,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
