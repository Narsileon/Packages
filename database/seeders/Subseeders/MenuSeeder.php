<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Models\Menu;
use App\Services\MenuService;
use App\Templates\Menus\BackendMenu;
use App\Templates\Menus\FrontendFooter;
use App\Templates\Menus\FrontendHeader;
use Illuminate\Database\Seeder;

#endregion

class MenuSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        MenuService::createMenuItem(BackendMenu::get());
        MenuService::createMenuItem(FrontendFooter::get());
        MenuService::createMenuItem(FrontendHeader::get());

        $this->createMenus();
    }

    #endregion

    #region PRIVATE METHODS

    private function createMenus()
    {
        Menu::create([
            Menu::FIELD_TYPE => Menu::TYPE_BACKEND_MENU,
            Menu::FIELD_TITLE => 'Default Backend Menu',
            Menu::FIELD_TEMPLATE => MenuService::getMenuID(BackendMenu::get()),
        ]);

        Menu::create([
            Menu::FIELD_TYPE => Menu::TYPE_FRONTEND_FOOTER,
            Menu::FIELD_TITLE => 'Default Frontend Footer',
            Menu::FIELD_TEMPLATE => MenuService::getMenuID(FrontendFooter::get()),
        ]);

        Menu::create([
            Menu::FIELD_TYPE => Menu::TYPE_FRONTEND_HEADER,
            Menu::FIELD_TITLE => 'Default Frontend Header',
            Menu::FIELD_TEMPLATE =>MenuService::getMenuID(FrontendHeader::get()),
        ]);
    }

    #endregion
}
