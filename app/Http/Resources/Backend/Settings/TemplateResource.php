<?php

namespace App\Http\Resources\Backend\Settings;

#region USE

use App\Models\Backend\UserSettings;
use App\Templates\FaqTemplate;
use App\Templates\FooterLinkTemplate;
use App\Templates\HeaderLinkTemplate;
use App\Templates\LanguageTemplate;
use App\Templates\LocalizationTemplate;
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
            UserSettings::FIELD_TEMPLATE_FAQS => $this->{ UserSettings::FIELD_TEMPLATE_FAQS },
            UserSettings::FIELD_TEMPLATE_FOOTER_LINKS => $this->{ UserSettings::FIELD_TEMPLATE_FOOTER_LINKS },
            UserSettings::FIELD_TEMPLATE_HEADER_LINKS => $this->{ UserSettings::FIELD_TEMPLATE_HEADER_LINKS },
            UserSettings::FIELD_TEMPLATE_LANGUAGES => $this->{ UserSettings::FIELD_TEMPLATE_LANGUAGES },
            UserSettings::FIELD_TEMPLATE_LOCALIZATIONS => $this->{ UserSettings::FIELD_TEMPLATE_LOCALIZATIONS },
            UserSettings::FIELD_TEMPLATE_ORDERS => $this->{ UserSettings::FIELD_TEMPLATE_ORDERS },
            UserSettings::FIELD_TEMPLATE_ROLES => $this->{ UserSettings::FIELD_TEMPLATE_ROLES },
            UserSettings::FIELD_TEMPLATE_USERS => $this->{ UserSettings::FIELD_TEMPLATE_USERS },
        ];
    }

    public function with($request)
    {
        return [
            'columns' => [
                UserSettings::FIELD_TEMPLATE_FAQS => FaqTemplate::COLUMNS,
                UserSettings::FIELD_TEMPLATE_FOOTER_LINKS => FooterLinkTemplate::COLUMNS,
                UserSettings::FIELD_TEMPLATE_HEADER_LINKS => HeaderLinkTemplate::COLUMNS,
                UserSettings::FIELD_TEMPLATE_LANGUAGES => LanguageTemplate::COLUMNS,
                UserSettings::FIELD_TEMPLATE_LOCALIZATIONS => LocalizationTemplate::COLUMNS,
                UserSettings::FIELD_TEMPLATE_ORDERS => OrderTemplate::COLUMNS,
                UserSettings::FIELD_TEMPLATE_ROLES => RoleTemplate::COLUMNS,
                UserSettings::FIELD_TEMPLATE_USERS => UserTemplate::COLUMNS,
            ]
        ];
    }

    #endregion
}
