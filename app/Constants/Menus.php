<?php

namespace App\Constants;

use App\Models\MenuItem;

abstract class Menus
{
    #region CONSTANTS

    public const FIELD_CHILDREN = 'children';

    public const TYPE_CATEGORY = 'category';
    public const TYPE_PAGE = 'page';

    public const DEFAULT_BACKEND_MENU = [
        [
            MenuItem::FIELD_TYPE => self::TYPE_PAGE,
            MenuItem::FIELD_ICON => 'dashboard',
            MenuItem::FIELD_LABEL => 'common.dashboard',
            MenuItem::FIELD_URL => 'admin.dashboard',
        ],
        [
            MenuItem::FIELD_TYPE => self::TYPE_CATEGORY,
            MenuItem::FIELD_ICON => 'user',
            MenuItem::FIELD_LABEL => 'common.management',
            self::FIELD_CHILDREN => [
                [
                    MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                    MenuItem::FIELD_ICON => 'users',
                    MenuItem::FIELD_LABEL => 'common.users',
                    MenuItem::FIELD_URL => 'admin.users.index',
                ],
                [
                    MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                    MenuItem::FIELD_ICON => 'group',
                    MenuItem::FIELD_LABEL => 'permissions.roles',
                    MenuItem::FIELD_URL => 'admin.roles.index',
                ],
            ]
        ],
        [
            MenuItem::FIELD_TYPE => self::TYPE_CATEGORY,
            MenuItem::FIELD_ICON => 'office',
            MenuItem::FIELD_LABEL => 'common.backoffice',
            self::FIELD_CHILDREN => [
                [
                    MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                    MenuItem::FIELD_ICON => 'calendar',
                    MenuItem::FIELD_LABEL => 'date-time.calendars',
                    MenuItem::FIELD_URL => 'admin.calendar',
                ],
                [
                    MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                    MenuItem::FIELD_ICON => 'clipboard',
                    MenuItem::FIELD_LABEL => 'common.orders',
                    MenuItem::FIELD_URL => 'admin.orders.index',
                ],
            ]
        ],
        [
            MenuItem::FIELD_TYPE => self::TYPE_CATEGORY,
            MenuItem::FIELD_ICON => 'home',
            MenuItem::FIELD_LABEL => 'common.frontoffice',
            self::FIELD_CHILDREN => [
                [
                    MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                    MenuItem::FIELD_ICON => 'link',
                    MenuItem::FIELD_LABEL => 'common.header_links',
                    MenuItem::FIELD_URL => 'admin.header_links.index',
                ],
                [
                    MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                    MenuItem::FIELD_ICON => 'link',
                    MenuItem::FIELD_LABEL => 'common.footer_links',
                    MenuItem::FIELD_URL => 'admin.footer_links.index',
                ],
                [
                    MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                    MenuItem::FIELD_ICON => 'question',
                    MenuItem::FIELD_LABEL => 'common.faqs',
                    MenuItem::FIELD_URL => 'admin.faqs.index',
                ],
            ]
        ],
        [
            MenuItem::FIELD_TYPE => self::TYPE_CATEGORY,
            MenuItem::FIELD_ICON => 'cog',
            MenuItem::FIELD_LABEL => 'common.settings',
            self::FIELD_CHILDREN => [
                [
                    MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                    MenuItem::FIELD_ICON => 'cog',
                    MenuItem::FIELD_LABEL => 'common.general_settings',
                    MenuItem::FIELD_URL => 'admin.general_settings',
                ],
                [
                    MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                    MenuItem::FIELD_ICON => 'cog',
                    MenuItem::FIELD_LABEL => 'common.menus',
                    MenuItem::FIELD_URL => 'admin.menus',
                ],
                [
                    MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                    MenuItem::FIELD_ICON => 'cog',
                    MenuItem::FIELD_LABEL => 'common.templates',
                    MenuItem::FIELD_URL => 'admin.templates',
                ],
                [
                    MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                    MenuItem::FIELD_ICON => 'language',
                    MenuItem::FIELD_LABEL => 'common.languages',
                    MenuItem::FIELD_URL => 'admin.languages',
                ],
                [
                    MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                    MenuItem::FIELD_ICON => 'book',
                    MenuItem::FIELD_LABEL => 'common.dictionaries',
                    MenuItem::FIELD_URL => 'admin.dictionary.index',
                ],
            ]
        ],
    ];

    #endregion
}
