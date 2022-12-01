<?php

namespace Database\Factories;

#region USE

use App\Models\UserTemplates;
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

class UserTemplatesFactory extends Factory
{
    #region PUBLIC METHODS

    public function definition()
    {
        return [
            UserTemplates::FIELD_TEMPLATE_FAQS => FaqTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_FOOTER_LINKS => FooterLinkTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_HEADER_LINKS => HeaderLinkTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_LANGUAGES => LanguageTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_LOCALIZATIONS => LocalizationTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_ORDERS => OrderTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_ROLES => RoleTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_USERS => UserTemplate::DEFAULT_TEMPLATE,
        ];
    }

    #endregion
}
