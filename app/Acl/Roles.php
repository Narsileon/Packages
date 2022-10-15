<?php

namespace App\Acl;

#region USE

use App\Traits\HasConstants;

#endregion

abstract class Roles
{
    use HasConstants;

    #region CONSTANTS

    public const SUPER_ADMIN = 'super-admin';

    #endregion
}
