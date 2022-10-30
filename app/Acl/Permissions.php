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

    public const USERS_VIEW = 'users-view';
    public const USERS_CREATE = 'users-create';
    public const USERS_UPDATE = 'users-update';
    public const USERS_DELETE = 'users-delete';

    public const ROLES_VIEW = 'roles-view';
    public const ROLES_CREATE = 'roles-create';
    public const ROLES_UPDATE = 'roles-update';
    public const ROLES_DELETE = 'roles-delete';

    public const FAQS_VIEW = 'faqs-view';
    public const FAQS_CREATE = 'faqs-create';
    public const FAQS_UPDATE = 'faqs-update';
    public const FAQS_DELETE = 'faqs-delete';

    #endregion
}
