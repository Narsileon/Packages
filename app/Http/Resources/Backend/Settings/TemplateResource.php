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
            UserSettings::FIELD_FAQS => $this->{ UserSettings::FIELD_FAQS },
            UserSettings::FIELD_FOOTER_LINKS => $this->{ UserSettings::FIELD_FOOTER_LINKS },
            UserSettings::FIELD_HEADER_LINKS => $this->{ UserSettings::FIELD_HEADER_LINKS },
            UserSettings::FIELD_LANGUAGES => $this->{ UserSettings::FIELD_LANGUAGES },
            UserSettings::FIELD_LOCALIZATIONS => $this->{ UserSettings::FIELD_LOCALIZATIONS },
            UserSettings::FIELD_ORDERS => $this->{ UserSettings::FIELD_ORDERS },
            UserSettings::FIELD_ROLES => $this->{ UserSettings::FIELD_ROLES },
            UserSettings::FIELD_USERS => $this->{ UserSettings::FIELD_USERS },

            'columns' => [
                UserSettings::FIELD_FAQS => FaqTemplate::COLUMNS,
                UserSettings::FIELD_FOOTER_LINKS => FooterLinkTemplate::COLUMNS,
                UserSettings::FIELD_HEADER_LINKS => HeaderLinkTemplate::COLUMNS,
                UserSettings::FIELD_LANGUAGES => LanguageTemplate::COLUMNS,
                UserSettings::FIELD_LOCALIZATIONS => LocalizationTemplate::COLUMNS,
                UserSettings::FIELD_ORDERS => OrderTemplate::COLUMNS,
                UserSettings::FIELD_ROLES => RoleTemplate::COLUMNS,
                UserSettings::FIELD_USERS => UserTemplate::COLUMNS,
            ]
        ];
    }

    #endregion
}
