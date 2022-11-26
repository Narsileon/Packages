<?php

namespace App\Templates;

#region USE

use App\Constants\Tables;
use App\Constants\Types;
use App\Models\Backend\UserSettings;
use App\Models\Frontend\FooterLink;

#endregion

class FooterLinkTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            Tables::FIELD_ACCESSOR_KEY => FooterLink::FIELD_ID,
            Tables::FIELD_ID => FooterLink::FIELD_ID,
            Tables::FIELD_TYPE => Types::INTEGER,
            Tables::FIELD_HEADER => 'common.ids',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => FooterLink::FIELD_LABEL,
            Tables::FIELD_ID => FooterLink::FIELD_LABEL,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.designations',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => FooterLink::FIELD_URL,
            Tables::FIELD_ID => FooterLink::FIELD_URL,
            Tables::FIELD_TYPE => Types::STRING,
            Tables::FIELD_HEADER => 'common.urls',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => FooterLink::FIELD_ACTIVE,
            Tables::FIELD_ID => FooterLink::FIELD_ACTIVE,
            Tables::FIELD_TYPE => Types::BOOLEAN,
            Tables::FIELD_HEADER => 'common.active',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => FooterLink::CREATED_AT,
            Tables::FIELD_ID => FooterLink::CREATED_AT,
            Tables::FIELD_TYPE => Types::DATETIME,
            Tables::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            Tables::FIELD_ACCESSOR_KEY => FooterLink::UPDATED_AT,
            Tables::FIELD_ID => FooterLink::UPDATED_AT,
            Tables::FIELD_TYPE => Types::DATETIME,
            Tables::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        Tables::PROPERTY_NAME => UserSettings::FIELD_FOOTER_LINKS,
        Tables::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        Tables::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        Tables::FIELD_MENU,
        FooterLink::FIELD_ID,
        FooterLink::FIELD_LABEL,
        FooterLink::FIELD_URL,
        FooterLink::FIELD_ACTIVE,
        FooterLink::CREATED_AT,
        FooterLink::UPDATED_AT,
    ];

    private const DEFAULT_SORTING = [
        [
            Tables::FIELD_ID => FooterLink::FIELD_ID,
            Tables::ORDER_DESC => false,
        ],
    ];

    #endregion
}
