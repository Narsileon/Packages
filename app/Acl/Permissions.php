<?php

namespace App\Acl;

#region USE

use App\Traits\HasConstants;

#endregion

abstract class Permissions
{
    use HasConstants;

    #region CONSTANTS

    public const BACKOFFICE_VIEW = 'backoffice-view';

    public const LANGUAGES_VIEW = 'languages-view';

    public const USERS_VIEW = 'users-view';
    public const USERS_CREATE = 'users-create';
    public const USERS_UPDATE = 'users-update';
    public const USERS_DELETE = 'users-delete';

    public const ROLES_VIEW = 'roles-view';
    public const ROLES_CREATE = 'roles-create';
    public const ROLES_UPDATE = 'roles-update';
    public const ROLES_DELETE = 'roles-delete';

    public const HEADER_LINKS_VIEW = 'header-link-view';
    public const HEADER_LINKS_CREATE = 'header-link-create';
    public const HEADER_LINKS_UPDATE = 'header-link-update';
    public const HEADER_LINKS_DELETE = 'header-link-delete';

    public const FOOTER_LINKS_VIEW = 'footer-link-view';
    public const FOOTER_LINKS_CREATE = 'footer-link-create';
    public const FOOTER_LINKS_UPDATE = 'footer-link-update';
    public const FOOTER_LINKS_DELETE = 'footer-link-delete';

    public const FAQS_VIEW = 'faqs-view';
    public const FAQS_CREATE = 'faqs-create';
    public const FAQS_UPDATE = 'faqs-update';
    public const FAQS_DELETE = 'faqs-delete';

    public const ORDERS_VIEW = 'orders-view';
    public const ORDERS_CREATE = 'orders-create';
    public const ORDERS_UPDATE = 'orders-update';
    public const ORDERS_DELETE = 'orders-delete';

    #endregion
}
