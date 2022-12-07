<?php

namespace App\Constants;

use App\Acl\Permissions;
use App\Models\MenuItem;
use App\Services\MenuService;

abstract class Menus
{
    #region CONSTANTS

    public const BACKEND_MENU = 'backend_menu';
    public const FRONTEND_FOOTER = 'frontend_footer';
    public const FRONTEND_HEADER = 'frontend_header';

    public const CATEGORY_BACKOFFICE = 'category_backoffice';
    public const CATEGORY_FRONTOFFICE = 'category_frontoffice';
    public const CATEGORY_MANAGEMENT = 'category_management';
    public const CATEGORY_SETTINGS = 'category_settings';

    public const PAGE_BACKEND_CALENDAR = 'page_backend_calendar';
    public const PAGE_BACKEND_DASHBOARD = 'page_backend_dashboard';
    public const PAGE_BACKEND_FAQS = 'page_backend_faqs';
    public const PAGE_BACKEND_GENERAL_SETTINGS = 'page_backend_general_settings';
    public const PAGE_BACKEND_LANGUAGES = 'page_backend_languages';
    public const PAGE_BACKEND_LOCALIZATIONS = 'page_backend_localizations';
    public const PAGE_BACKEND_MENUS = 'page_backend_menus';
    public const PAGE_BACKEND_MENU_ITEMS = 'page_backend_menu_items';
    public const PAGE_BACKEND_ORDERS = 'page_backend_orders';
    public const PAGE_BACKEND_ROLES = 'page_backend_roles';
    public const PAGE_BACKEND_TEMPLATES = 'page_backend_templates';
    public const PAGE_BACKEND_USERS = 'page_backend_users';
    public const PAGE_FRONTEND_FAQS = 'page_frontend_faqs';
    public const PAGE_FRONTEND_HOME = 'page_frontend_home';

    public const TYPE_CATEGORY = 'category';
    public const TYPE_PAGE = 'page';

    #endregion

    #region PUBLIC METHODS

    public static function getDefaultCategories()
    {
        return [
            [
                MenuItem::FIELD_SLUG => self::CATEGORY_BACKOFFICE,
                MenuItem::FIELD_TYPE => self::TYPE_CATEGORY,
                MenuItem::FIELD_ICON => 'office',
                MenuItem::FIELD_LABEL => 'common.backoffice',
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::BACKEND_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::CATEGORY_FRONTOFFICE,
                MenuItem::FIELD_TYPE => self::TYPE_CATEGORY,
                MenuItem::FIELD_ICON => 'home',
                MenuItem::FIELD_LABEL => 'common.frontoffice',
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::BACKEND_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::CATEGORY_MANAGEMENT,
                MenuItem::FIELD_TYPE => self::TYPE_CATEGORY,
                MenuItem::FIELD_ICON => 'user',
                MenuItem::FIELD_LABEL => 'common.management',
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::BACKEND_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::CATEGORY_SETTINGS,
                MenuItem::FIELD_TYPE => self::TYPE_CATEGORY,
                MenuItem::FIELD_ICON => 'cog',
                MenuItem::FIELD_LABEL => 'common.settings',
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::BACKEND_VIEW,
                ],
            ],
        ];
    }

    public static function getDefaultPages()
    {
        return [
            [
                MenuItem::FIELD_SLUG => self::PAGE_BACKEND_CALENDAR,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'calendar',
                MenuItem::FIELD_LABEL => 'date-time.calendars',
                MenuItem::FIELD_URL => route('admin.calendar'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::BACKEND_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_BACKEND_DASHBOARD,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'chart',
                MenuItem::FIELD_LABEL => 'common.dashboard',
                MenuItem::FIELD_URL => route('admin.dashboard'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::BACKEND_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_BACKEND_FAQS,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'question',
                MenuItem::FIELD_LABEL => 'common.faqs',
                MenuItem::FIELD_URL => route('admin.faqs.index'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::FAQS_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_BACKEND_GENERAL_SETTINGS,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'cog',
                MenuItem::FIELD_LABEL => 'common.general_settings',
                MenuItem::FIELD_URL => route('admin.general_settings.index'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::GENERAL_SETTINGS_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_BACKEND_LANGUAGES,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'language',
                MenuItem::FIELD_LABEL => 'common.languages',
                MenuItem::FIELD_URL => route('admin.languages.index'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::LANGUAGES_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_BACKEND_LOCALIZATIONS,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'book',
                MenuItem::FIELD_LABEL => 'common.dictionaries',
                MenuItem::FIELD_URL => route('admin.localizations.index'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [

                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_BACKEND_MENUS,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'template',
                MenuItem::FIELD_LABEL => 'common.menus',
                MenuItem::FIELD_URL => route('admin.menus.index'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::MENUS_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_BACKEND_MENU_ITEMS,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'link',
                MenuItem::FIELD_LABEL => 'common.menu_items',
                MenuItem::FIELD_URL => route('admin.menu_items.index'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::MENU_ITEMS_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_BACKEND_ORDERS,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'clipboard',
                MenuItem::FIELD_LABEL => 'common.orders',
                MenuItem::FIELD_URL => route('admin.orders.index'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::ORDERS_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_BACKEND_ROLES,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'group',
                MenuItem::FIELD_LABEL => 'permissions.roles',
                MenuItem::FIELD_URL => route('admin.roles.index'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::ROLES_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_BACKEND_TEMPLATES,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'template',
                MenuItem::FIELD_LABEL => 'common.templates',
                MenuItem::FIELD_URL => route('admin.templates.index'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::TEMPLATES_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_BACKEND_USERS,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'users',
                MenuItem::FIELD_LABEL => 'common.users',
                MenuItem::FIELD_URL => route('admin.users.index'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [
                    Permissions::USERS_VIEW,
                ],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_FRONTEND_FAQS,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'question',
                MenuItem::FIELD_LABEL => 'common.faqs',
                MenuItem::FIELD_URL => route('faq'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [],
            ],
            [
                MenuItem::FIELD_SLUG => self::PAGE_FRONTEND_HOME,
                MenuItem::FIELD_TYPE => self::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'home',
                MenuItem::FIELD_LABEL => 'common.home',
                MenuItem::FIELD_URL => route('home'),
                MenuItem::ATTRIBUTE_PERMISSIONS => [],
            ],
        ];
    }

    public static function getDefaultMenu($name)
    {
        switch ($name) {
            case self::BACKEND_MENU:
                return [
                    [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_BACKEND_DASHBOARD)->{ MenuItem::FIELD_ID }],
                    [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_BACKEND_CALENDAR)->{ MenuItem::FIELD_ID }],
                    [
                        MenuItem::FIELD_ID => MenuService::getMenuItem(self::CATEGORY_MANAGEMENT)->{ MenuItem::FIELD_ID },
                        MenuItem::FIELD_CHILDREN => [
                            [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_BACKEND_USERS)->{ MenuItem::FIELD_ID }],
                            [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_BACKEND_ROLES)->{ MenuItem::FIELD_ID }],
                            [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_BACKEND_MENUS)->{ MenuItem::FIELD_ID }],
                            [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_BACKEND_MENU_ITEMS)->{ MenuItem::FIELD_ID }],
                        ],
                    ],
                    [
                        MenuItem::FIELD_ID => MenuService::getMenuItem(self::CATEGORY_BACKOFFICE)->{ MenuItem::FIELD_ID },
                        MenuItem::FIELD_CHILDREN => [
                            [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_BACKEND_ORDERS)->{ MenuItem::FIELD_ID }],
                        ],
                    ],
                    [
                        MenuItem::FIELD_ID => MenuService::getMenuItem(self::CATEGORY_FRONTOFFICE)->{ MenuItem::FIELD_ID },
                        MenuItem::FIELD_CHILDREN => [
                            [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_BACKEND_FAQS)->{ MenuItem::FIELD_ID }],
                        ],
                    ],
                    [
                        MenuItem::FIELD_ID => MenuService::getMenuItem(self::CATEGORY_SETTINGS)->{ MenuItem::FIELD_ID },
                        MenuItem::FIELD_CHILDREN => [
                            [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_BACKEND_GENERAL_SETTINGS)->{ MenuItem::FIELD_ID }],
                            [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_BACKEND_LANGUAGES)->{ MenuItem::FIELD_ID }],
                            [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_BACKEND_LOCALIZATIONS)->{ MenuItem::FIELD_ID }],
                            [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_BACKEND_TEMPLATES)->{ MenuItem::FIELD_ID }],
                        ],
                    ],
                ];
            case self::FRONTEND_FOOTER:
                return [
                    [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_FRONTEND_FAQS)->{ MenuItem::FIELD_ID }],
                ];
            case self::FRONTEND_HEADER:
                return [
                    [MenuItem::FIELD_ID => MenuService::getMenuItem(self::PAGE_FRONTEND_HOME)->{ MenuItem::FIELD_ID }],
                ];
            default:
                return [];
        }
    }

    #endregion
}
