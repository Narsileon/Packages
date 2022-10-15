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

    #endregion
}
