<?php

namespace App\Http\Resources\Backend\Settings;

#region USE

use App\Models\UserTemplates;
use App\Templates\FaqTemplate;
use App\Templates\LanguageTemplate;
use App\Templates\LocalizationTemplate;
use App\Templates\MenuItemTemplate;
use App\Templates\OrderTemplate;
use App\Templates\RoleTemplate;
use App\Templates\UserTemplate;
use Illuminate\Http\Resources\Json\JsonResource;

#endregion

class TemplateResource extends JsonResource
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return [
            UserTemplates::FIELD_ID => $this->{ UserTemplates::FIELD_ID },
            UserTemplates::FIELD_TEMPLATE_FAQS => $this->{ UserTemplates::FIELD_TEMPLATE_FAQS },
            UserTemplates::FIELD_TEMPLATE_LANGUAGES => $this->{ UserTemplates::FIELD_TEMPLATE_LANGUAGES },
            UserTemplates::FIELD_TEMPLATE_LOCALIZATIONS => $this->{ UserTemplates::FIELD_TEMPLATE_LOCALIZATIONS },
            UserTemplates::FIELD_TEMPLATE_MENU_ITEMS => $this->{ UserTemplates::FIELD_TEMPLATE_MENU_ITEMS },
            UserTemplates::FIELD_TEMPLATE_ORDERS => $this->{ UserTemplates::FIELD_TEMPLATE_ORDERS },
            UserTemplates::FIELD_TEMPLATE_ROLES => $this->{ UserTemplates::FIELD_TEMPLATE_ROLES },
            UserTemplates::FIELD_TEMPLATE_USERS => $this->{ UserTemplates::FIELD_TEMPLATE_USERS },
        ];
    }

    public function with($request)
    {
        return [
            'columns' => [
                UserTemplates::FIELD_TEMPLATE_FAQS => FaqTemplate::COLUMNS,
                UserTemplates::FIELD_TEMPLATE_LANGUAGES => LanguageTemplate::COLUMNS,
                UserTemplates::FIELD_TEMPLATE_LOCALIZATIONS => LocalizationTemplate::COLUMNS,
                UserTemplates::FIELD_TEMPLATE_MENU_ITEMS => MenuItemTemplate::COLUMNS,
                UserTemplates::FIELD_TEMPLATE_ORDERS => OrderTemplate::COLUMNS,
                UserTemplates::FIELD_TEMPLATE_ROLES => RoleTemplate::COLUMNS,
                UserTemplates::FIELD_TEMPLATE_USERS => UserTemplate::COLUMNS,
            ],
        ];
    }

    #endregion
}
