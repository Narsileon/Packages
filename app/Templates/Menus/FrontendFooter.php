<?php

namespace App\Templates\Menus;

#region USE

use App\Models\MenuItem;

#endregion

class FrontendFooter
{
    #region PUBLIC METHODS

    public static function get() {
        return [
            [
                MenuItem::FIELD_SLUG => 'page_frontend_faqs',
                MenuItem::FIELD_TYPE => MenuItem::TYPE_PAGE,
                MenuItem::FIELD_ICON => 'question',
                MenuItem::FIELD_LABEL => 'common.faqs',
                MenuItem::FIELD_URL => route('faq'),
            ],
        ];
    }

    #endregion
}
