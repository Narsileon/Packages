<?php

namespace App\Templates\Menus;

#region USE

use App\Models\MenuItem;

#endregion

class FrontendHeaderTemplate
{
    #region PUBLIC METHODS

    public static function get() {
        return [
            [
                MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'home',
                MenuItem::FIELD_LABEL => 'common.home',
                MenuItem::FIELD_URL => route('home'),
            ],
        ];
    }

    #endregion
}