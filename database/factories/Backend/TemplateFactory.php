<?php

namespace Database\Factories\Backend;

#region USE

use App\Models\Backend\Template;
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

class TemplateFactory extends Factory
{
    #region PUBLIC METHODS

    public function definition()
    {
        return [
            Template::FIELD_FAQS => FaqTemplate::DEFAULT_TEMPLATE,
            Template::FIELD_FOOTER_LINKS => FooterLinkTemplate::DEFAULT_TEMPLATE,
            Template::FIELD_HEADER_LINKS => HeaderLinkTemplate::DEFAULT_TEMPLATE,
            Template::FIELD_LANGUAGES => LanguageTemplate::DEFAULT_TEMPLATE,
            Template::FIELD_LOCALIZATIONS => LocalizationTemplate::DEFAULT_TEMPLATE,
            Template::FIELD_ORDERS => OrderTemplate::DEFAULT_TEMPLATE,
            Template::FIELD_ROLES => RoleTemplate::DEFAULT_TEMPLATE,
            Template::FIELD_USERS => UserTemplate::DEFAULT_TEMPLATE,
        ];
    }

    #endregion
}
