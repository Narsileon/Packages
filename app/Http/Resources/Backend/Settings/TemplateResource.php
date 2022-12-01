<?php

namespace App\Http\Resources\Backend\Settings;

#region USE

use App\Models\UserTemplates;
use App\Templates\Tables\FaqTemplate;
use App\Templates\Tables\LanguageTemplate;
use App\Templates\Tables\UserLocalizationTemplate;
use App\Templates\Tables\MenuItemTemplate;
use App\Templates\Tables\OrderTemplate;
use App\Templates\Tables\RoleTemplate;
use App\Templates\Tables\UserTemplate;
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
                UserTemplates::FIELD_TEMPLATE_LOCALIZATIONS => UserLocalizationTemplate::COLUMNS,
                UserTemplates::FIELD_TEMPLATE_MENU_ITEMS => MenuItemTemplate::COLUMNS,
                UserTemplates::FIELD_TEMPLATE_ORDERS => OrderTemplate::COLUMNS,
                UserTemplates::FIELD_TEMPLATE_ROLES => RoleTemplate::COLUMNS,
                UserTemplates::FIELD_TEMPLATE_USERS => UserTemplate::COLUMNS,
            ],
        ];
    }

    #endregion
}
