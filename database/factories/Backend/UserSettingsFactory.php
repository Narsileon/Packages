<?php

namespace Database\Factories\Backend;

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
use Illuminate\Database\Eloquent\Factories\Factory;

#endregion

class UserSettingsFactory extends Factory
{
    #region PUBLIC METHODS

    public function definition()
    {
        return [
            UserSettings::FIELD_TEMPLATE_FAQS => FaqTemplate::DEFAULT_TEMPLATE,
            UserSettings::FIELD_TEMPLATE_FOOTER_LINKS => FooterLinkTemplate::DEFAULT_TEMPLATE,
            UserSettings::FIELD_TEMPLATE_HEADER_LINKS => HeaderLinkTemplate::DEFAULT_TEMPLATE,
            UserSettings::FIELD_TEMPLATE_LANGUAGES => LanguageTemplate::DEFAULT_TEMPLATE,
            UserSettings::FIELD_TEMPLATE_LOCALIZATIONS => LocalizationTemplate::DEFAULT_TEMPLATE,
            UserSettings::FIELD_TEMPLATE_ORDERS => OrderTemplate::DEFAULT_TEMPLATE,
            UserSettings::FIELD_TEMPLATE_ROLES => RoleTemplate::DEFAULT_TEMPLATE,
            UserSettings::FIELD_TEMPLATE_USERS => UserTemplate::DEFAULT_TEMPLATE,
        ];
    }

    #endregion
}
