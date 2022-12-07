<?php

namespace App\Acl;

#region USE

use App\Http\Resources\Backend\Management\UserPermissionCollection;
use App\Models\UserPermission;
use App\Traits\HasConstants;

#endregion

abstract class Permissions
{
    use HasConstants;

    #region CONSTANTS

    public const BACKEND_VIEW = 'backend_view';

    public const FAQS_CREATE = 'faqs_create';
    public const FAQS_DELETE = 'faqs_delete';
    public const FAQS_UPDATE = 'faqs_update';
    public const FAQS_VIEW = 'faqs_view';

    public const GENERAL_SETTINGS_UPDATE = 'general_settings_update';
    public const GENERAL_SETTINGS_VIEW = 'general_settings_view';

    public const LANGUAGES_UPDATE = 'languages_update';
    public const LANGUAGES_VIEW = 'languages_view';

    public const MENU_ITEMS_CREATE = 'menu_items_create';
    public const MENU_ITEMS_DELETE = 'menu_items_delete';
    public const MENU_ITEMS_UPDATE = 'menu_items_update';
    public const MENU_ITEMS_VIEW = 'menu_items_view';

    public const MENUS_CREATE = 'menu_create';
    public const MENUS_DELETE = 'menu_delete';
    public const MENUS_UPDATE = 'menu_update';
    public const MENUS_VIEW = 'menu_view';

    public const ORDERS_CREATE = 'orders_create';
    public const ORDERS_DELETE = 'orders_delete';
    public const ORDERS_UPDATE = 'orders_update';
    public const ORDERS_VIEW = 'orders_view';

    public const ROLES_CREATE = 'roles_create';
    public const ROLES_DELETE = 'roles_delete';
    public const ROLES_UPDATE = 'roles_update';
    public const ROLES_VIEW = 'roles_view';

    public const TEMPLATES_UPDATE = 'templates_update';
    public const TEMPLATES_VIEW = 'templates_view';

    public const USERS_CREATE = 'users_create';
    public const USERS_DELETE = 'users_delete';
    public const USERS_UPDATE = 'users_update';
    public const USERS_VIEW = 'users_view';

    #endregion

    #region PUBLIC METHODS

    public static function getAll()
    {
        return new UserPermissionCollection(UserPermission::All());
    }

    #endregion
}
