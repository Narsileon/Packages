<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Constants\Menus;
use App\Models\Menu;
use App\Services\MenuService;
use Illuminate\Database\Seeder;

#endregion

class MenuSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->createCategories();
        $this->createExternalLinks();
        $this->createPages();

        $this->createBackendMenu();
        $this->createFrontendFooter();
        $this->createFrontendHeader();
    }

    #endregion

    #region PRIVATE METHODS

    private function createCategories()
    {
        foreach(Menus::getDefaultCategories() as $category)
        {
            MenuService::createMenuItem($category);
        }
    }

    private function createExternalLinks()
    {
        foreach(Menus::getDefaultExternalLinks() as $externalLinks)
        {
            MenuService::createMenuItem($externalLinks);
        }
    }

    private function createPages()
    {
        foreach(Menus::getDefaultPages() as $page)
        {
            MenuService::createMenuItem($page);
        }
    }

    private function createBackendMenu()
    {
        Menu::create([
            Menu::FIELD_TYPE => Menus::BACKEND_MENU,
            Menu::FIELD_TITLE => 'Default Backend Menu',
            Menu::FIELD_TEMPLATE => Menus::getDefaultMenu(Menus::BACKEND_MENU),
        ]);
    }

    private function createFrontendFooter()
    {
        Menu::create([
            Menu::FIELD_TYPE => Menus::FRONTEND_FOOTER,
            Menu::FIELD_TITLE => 'Default Frontend Footer',
            Menu::FIELD_TEMPLATE => Menus::getDefaultMenu(Menus::FRONTEND_FOOTER),
        ]);
    }

    private function createFrontendHeader()
    {
        Menu::create([
            Menu::FIELD_TYPE => Menus::FRONTEND_HEADER,
            Menu::FIELD_TITLE => 'Default Frontend Header',
            Menu::FIELD_TEMPLATE => Menus::getDefaultMenu(Menus::FRONTEND_HEADER),
        ]);
    }

    #endregion
}
