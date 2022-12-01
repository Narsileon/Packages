<?php

namespace App\Templates\Menus;

#region USE

use App\Models\MenuItem;

#endregion

class FrontendFooterTemplate
{
    #region PUBLIC METHODS

    public static function get() {
        return [
            [
                MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                MenuItem::FIELD_ICON => '',
                MenuItem::FIELD_LABEL => 'common.faqs',
                MenuItem::FIELD_URL => route('faq'),
            ],
        ];
    }

    #endregion
}
