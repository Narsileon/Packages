<?php

namespace App\Templates\Menus;

#region USE

use App\Models\MenuItem;

#endregion

class BackendMenu
{
    #region PUBLIC METHODS

    public static function get() {
        return [
            [
                MenuItem::FIELD_SLUG => 'page_backend_dashboard',
                MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'chart',
                MenuItem::FIELD_LABEL => 'common.dashboard',
                MenuItem::FIELD_URL => route('admin.dashboard'),
            ],
            [
                MenuItem::FIELD_SLUG => 'category_management',
                MenuItem::FIELD_TYPE => MenuItem::TYPE_CATEGORY,
                MenuItem::FIELD_ICON => 'user',
                MenuItem::FIELD_LABEL => 'common.management',
                MenuItem::FIELD_CHILDREN => [
                    [
                        MenuItem::FIELD_SLUG => 'page_backend_users',
                        MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                        MenuItem::FIELD_ICON => 'users',
                        MenuItem::FIELD_LABEL => 'common.users',
                        MenuItem::FIELD_URL => route('admin.users.index'),
                    ],
                    [
                        MenuItem::FIELD_SLUG => 'page_backend_roles',
                        MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                        MenuItem::FIELD_ICON => 'group',
                        MenuItem::FIELD_LABEL => 'permissions.roles',
                        MenuItem::FIELD_URL => route('admin.roles.index'),
                    ],
                    [
                        MenuItem::FIELD_SLUG => 'page_backend_menu_items',
                        MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                        MenuItem::FIELD_ICON => 'link',
                        MenuItem::FIELD_LABEL => 'common.menu_items',
                        MenuItem::FIELD_URL => route('admin.menu_items.index'),
                    ],
                ]
            ],
            [
                MenuItem::FIELD_SLUG => 'category_backoffice',
                MenuItem::FIELD_TYPE => MenuItem::TYPE_CATEGORY,
                MenuItem::FIELD_ICON => 'office',
                MenuItem::FIELD_LABEL => 'common.backoffice',
                MenuItem::FIELD_CHILDREN => [
                    [
                        MenuItem::FIELD_SLUG => 'page_backend_calendar',
                        MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                        MenuItem::FIELD_ICON => 'calendar',
                        MenuItem::FIELD_LABEL => 'date-time.calendars',
                        MenuItem::FIELD_URL => route('admin.calendar'),
                    ],
                    [
                        MenuItem::FIELD_SLUG => 'page_backend_orders',
                        MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                        MenuItem::FIELD_ICON => 'clipboard',
                        MenuItem::FIELD_LABEL => 'common.orders',
                        MenuItem::FIELD_URL => route('admin.orders.index'),
                    ],
                ]
            ],
            [
                MenuItem::FIELD_SLUG => 'category_frontoffice',
                MenuItem::FIELD_TYPE => MenuItem::TYPE_CATEGORY,
                MenuItem::FIELD_ICON => 'home',
                MenuItem::FIELD_LABEL => 'common.frontoffice',
                MenuItem::FIELD_CHILDREN => [
                    [
                        MenuItem::FIELD_SLUG => 'page_backend_faqs',
                        MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                        MenuItem::FIELD_ICON => 'question',
                        MenuItem::FIELD_LABEL => 'common.faqs',
                        MenuItem::FIELD_URL => route('admin.faqs.index'),
                    ],
                ]
            ],
            [
                MenuItem::FIELD_SLUG => 'category_settings',
                MenuItem::FIELD_TYPE => MenuItem::TYPE_CATEGORY,
                MenuItem::FIELD_ICON => 'cog',
                MenuItem::FIELD_LABEL => 'common.settings',
                MenuItem::FIELD_CHILDREN => [
                    [
                        MenuItem::FIELD_SLUG => 'page_backend_general_settings',
                        MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                        MenuItem::FIELD_ICON => 'cog',
                        MenuItem::FIELD_LABEL => 'common.general_settings',
                        MenuItem::FIELD_URL => route('admin.general_settings.index'),
                    ],
                    [
                        MenuItem::FIELD_SLUG => 'page_backend_languages',
                        MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                        MenuItem::FIELD_ICON => 'language',
                        MenuItem::FIELD_LABEL => 'common.languages',
                        MenuItem::FIELD_URL => route('admin.languages.index'),
                    ],
                    [
                        MenuItem::FIELD_SLUG => 'page_backend_localizations',
                        MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                        MenuItem::FIELD_ICON => 'book',
                        MenuItem::FIELD_LABEL => 'common.dictionaries',
                        MenuItem::FIELD_URL => route('admin.localizations.index'),
                    ],
                    [
                        MenuItem::FIELD_SLUG => 'page_backend_user_menus',
                        MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                        MenuItem::FIELD_ICON => 'template',
                        MenuItem::FIELD_LABEL => 'common.menus',
                        MenuItem::FIELD_URL => route('admin.menus.index'),
                    ],
                    [
                        MenuItem::FIELD_SLUG => 'page_backend_templates',
                        MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                        MenuItem::FIELD_ICON => 'template',
                        MenuItem::FIELD_LABEL => 'common.templates',
                        MenuItem::FIELD_URL => route('admin.templates.index'),
                    ],
                ]
            ],
        ];
    }

    #endregion
}
