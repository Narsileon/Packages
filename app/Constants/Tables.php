<?php

namespace App\Constants;

abstract class Tables
{
    #region CONSTANTS

    public const FIELD_ACCESSOR_KEY = 'accessorKey';
    public const FIELD_CUSTOM_VALUE = 'custom_value';
    public const FIELD_DESC = 'desc';
    public const FIELD_DISABLE_ORDER = 'disableOrderBy';
    public const FIELD_DISABLE_SORT = 'disableSortBy';
    public const FIELD_HEADER = 'header';
    public const FIELD_ID = 'id';
    public const FIELD_KEY = 'key';
    public const FIELD_MAX_SIZE = 'maxSize';
    public const FIELD_MENU = 'menu';
    public const FIELD_MIN_SIZE = 'minSize';
    public const FIELD_SIZE = 'size';
    public const FIELD_TYPE = 'type';
    public const FIELD_VALUE = 'value';

    public const PROPERTY_NAME = 'name';
    public const PROPERTY_COLUMN_FILTERS = 'columnFilters';
    public const PROPERTY_COLUMN_ORDER = 'columnOrder';
    public const PROPERTY_COLUMN_SIZING = 'columnSizing';
    public const PROPERTY_COLUMN_VISIBILITY = 'columnVisibility';
    public const PROPERTY_COLUMNS = 'columns';
    public const PROPERTY_GLOBAL_FILTER = 'globalFilter';
    public const PROPERTY_SORTING = 'sorting';

    public const CATEGORY_DEFAULT = 'default';
    public const CATEGORY_CUSTOM = 'custom';

    public const ORDER_ASC = 'asc';
    public const ORDER_DESC = 'desc';

    public const TABLE_FAQS = 'faqs';
    public const TABLE_FAILED_JOBS = 'failed_jobs';
    PUBLIC const TABLE_GENERAL_SETTINGS = 'general_settings';
    public const TABLE_LANGUAGES = 'languages';
    public const TABLE_MENU_ITEMS = 'menu_items';
    public const TABLE_ORDERS = 'orders';
    public const TABLE_PASSWORD_RESETS = 'password_resets';
    public const TABLE_PERSONAL_ACCESS_TOKENS = 'personal_access_tokens';
    public const TABLE_ROLES = 'roles';
    public const TABLE_USERS = 'users';
    public const TABLE_USER_LOCALIZATIONS = 'user_localizations';
    public const TABLE_USER_MENUS = 'user_menus';
    public const TABLE_USER_SETTINGS = 'user_settings';
    public const TABLE_USER_TEMPLATES = 'user_templates';

    public const TEMPLATES = [
        self::TABLE_FAQS,
        self::TABLE_LANGUAGES,
        self::TABLE_MENU_ITEMS,
        self::TABLE_ORDERS,
        self::TABLE_ROLES,
        self::TABLE_USERS,
        self::TABLE_USER_LOCALIZATIONS,
    ];

    #endregion
}
