<?php

namespace App\Templates;

#region USE

use App\Constants\TableConstants;
use App\Constants\Types;
use App\Models\Backend\UserSettings;
use App\Models\Frontend\FooterLink;

#endregion

class FooterLinkTemplate
{
    #region CONSTANTS

    public const COLUMNS = [
        [
            TableConstants::FIELD_ACCESSOR_KEY => FooterLink::FIELD_ID,
            TableConstants::FIELD_ID => FooterLink::FIELD_ID,
            TableConstants::FIELD_TYPE => Types::INTEGER,
            TableConstants::FIELD_HEADER => 'common.ids',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => FooterLink::FIELD_LABEL,
            TableConstants::FIELD_ID => FooterLink::FIELD_LABEL,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.designations',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => FooterLink::FIELD_URL,
            TableConstants::FIELD_ID => FooterLink::FIELD_URL,
            TableConstants::FIELD_TYPE => Types::STRING,
            TableConstants::FIELD_HEADER => 'common.urls',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => FooterLink::FIELD_ACTIVE,
            TableConstants::FIELD_ID => FooterLink::FIELD_ACTIVE,
            TableConstants::FIELD_TYPE => Types::BOOLEAN,
            TableConstants::FIELD_HEADER => 'common.active',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => FooterLink::CREATED_AT,
            TableConstants::FIELD_ID => FooterLink::CREATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.created_at',
        ],
        [
            TableConstants::FIELD_ACCESSOR_KEY => FooterLink::UPDATED_AT,
            TableConstants::FIELD_ID => FooterLink::UPDATED_AT,
            TableConstants::FIELD_TYPE => Types::DATETIME,
            TableConstants::FIELD_HEADER => 'validation.attributes.updated_at',
        ],
    ];

    public const DEFAULT_TEMPLATE = [
        TableConstants::PROPERTY_NAME => UserSettings::FIELD_TEMPLATE_FOOTER_LINKS,
        TableConstants::PROPERTY_COLUMN_ORDER => self::DEFAULT_ORDER,
        TableConstants::PROPERTY_SORTING => self::DEFAULT_SORTING,
    ];

    private const DEFAULT_ORDER = [
        TableConstants::FIELD_MENU,
        FooterLink::FIELD_ID,
        FooterLink::FIELD_LABEL,
        FooterLink::FIELD_URL,
        FooterLink::FIELD_ACTIVE,
        FooterLink::CREATED_AT,
        FooterLink::UPDATED_AT,
    ];

    private const DEFAULT_SORTING = [
        [
            TableConstants::FIELD_ID => FooterLink::FIELD_ID,
            TableConstants::ORDER_DESC => false,
        ],
    ];

    #endregion
}
