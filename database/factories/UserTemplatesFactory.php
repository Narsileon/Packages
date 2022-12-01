<?php

namespace Database\Factories;

#region USE

use App\Models\UserTemplates;
use App\Templates\Tables\FaqTemplate;
use App\Templates\Tables\LanguageTemplate;
use App\Templates\Tables\UserLocalizationTemplate;
use App\Templates\Tables\MenuItemTemplate;
use App\Templates\Tables\OrderTemplate;
use App\Templates\Tables\RoleTemplate;
use App\Templates\Tables\UserTemplate;
use Illuminate\Database\Eloquent\Factories\Factory;

#endregion

class UserTemplatesFactory extends Factory
{
    #region PUBLIC METHODS

    public function definition()
    {
        return [
            UserTemplates::FIELD_TEMPLATE_FAQS => FaqTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_LANGUAGES => LanguageTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_LOCALIZATIONS => UserLocalizationTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_MENU_ITEMS => MenuItemTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_ORDERS => OrderTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_ROLES => RoleTemplate::DEFAULT_TEMPLATE,
            UserTemplates::FIELD_TEMPLATE_USERS => UserTemplate::DEFAULT_TEMPLATE,
        ];
    }

    #endregion
}
