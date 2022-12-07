<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Constants\Tables;
use App\Models\Backend\Order;
use App\Models\Backend\GeneralSettings;
use App\Models\Template;
use App\Templates\FaqTable;
use App\Templates\LanguageTable;
use App\Templates\LocalizationTable;
use App\Templates\MenuItemTable;
use App\Templates\OrderTable;
use App\Templates\RoleTable;
use App\Templates\UserTable;
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
        Order::factory(20)->create();
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
