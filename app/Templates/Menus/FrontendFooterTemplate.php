<?php

namespace App\Templates\Menus;

#region USE

use App\Models\MenuItem;

#endregion

class BackendMenuTemplate
{
    #region CONSTANTS

    public const DEFAULT = [
        [
            MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
            MenuItem::FIELD_ICON => '',
            MenuItem::FIELD_LABEL => 'common.faqs',
            MenuItem::FIELD_URL => 'faq',
        ],
    ];

    #endregion
}
