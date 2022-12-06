<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Constants\Tables;
use App\Models\Backend\Order;
use App\Models\Backend\GeneralSettings;
use App\Models\Template;
use App\Templates\Tables\FaqTable;
use App\Templates\Tables\LanguageTable;
use App\Templates\Tables\LocalizationTable;
use App\Templates\Tables\MenuItemTable;
use App\Templates\Tables\OrderTable;
use App\Templates\Tables\RoleTable;
use App\Templates\Tables\UserTable;
use Illuminate\Database\Seeder;

#endregion

class BackendSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->createOrders();
        $this->createSettings();
        $this->createTemplates();
    }

    #endregion

    #region PRIVATE METHODS

    private function createOrders()
    {
        Order::factory(10)->create();
    }

    private function createSettings()
    {
        GeneralSettings::create([
            GeneralSettings::FIELD_APP_NAME => 'PIA-Framework',
        ]);
    }

    private function createTemplates()
    {
        Template::create([
            Template::FIELD_TYPE => Tables::TABLE_FAQS,
            Template::FIELD_TEMPLATE => FaqTable::DEFAULT_TEMPLATE,
        ]);

        Template::create([
            Template::FIELD_TYPE => Tables::TABLE_LANGUAGES,
            Template::FIELD_TEMPLATE => LanguageTable::DEFAULT_TEMPLATE,
        ]);

        Template::create([
            Template::FIELD_TYPE => Tables::TABLE_LOCALIZATIONS,
            Template::FIELD_TEMPLATE => LocalizationTable::DEFAULT_TEMPLATE,
        ]);

        Template::create([
            Template::FIELD_TYPE => Tables::TABLE_MENU_ITEMS,
            Template::FIELD_TEMPLATE => MenuItemTable::DEFAULT_TEMPLATE,
        ]);

        Template::create([
            Template::FIELD_TYPE => Tables::TABLE_ORDERS,
            Template::FIELD_TEMPLATE => OrderTable::DEFAULT_TEMPLATE,
        ]);

        Template::create([
            Template::FIELD_TYPE => Tables::TABLE_ROLES,
            Template::FIELD_TEMPLATE => RoleTable::DEFAULT_TEMPLATE,
        ]);

        Template::create([
            Template::FIELD_TYPE => Tables::TABLE_USERS,
            Template::FIELD_TEMPLATE => UserTable::DEFAULT_TEMPLATE,
        ]);
    }

    #endregion
}
