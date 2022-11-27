<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Constants\Menus;
use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Database\Seeder;

#endregion

class MenuSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->createBackendMenu();
    }

    #endregion

    #region PRIVATE METHODS

    private function createBackendMenu()
    {
        $menu = [];

        foreach(Menus::DEFAULT_BACKEND_MENU as $item)
        {
            if ($item[MenuItem::FIELD_TYPE] == Menus::TYPE_CATEGORY)
            {
                $category = MenuItem::create([
                    MenuItem::FIELD_TYPE => $item[MenuItem::FIELD_TYPE],
                    MenuItem::FIELD_ICON => $item[MenuItem::FIELD_ICON],
                    MenuItem::FIELD_LABEL => $item[MenuItem::FIELD_LABEL],
                ]);

                $menuItem = [
                    MenuItem::FIELD_ID => $category->id,
                    Menus::FIELD_CHILDREN => [],
                ];

                foreach($item[Menus::FIELD_CHILDREN] as $subitem)
                {
                    $page = MenuItem::create([
                        MenuItem::FIELD_TYPE => $subitem[MenuItem::FIELD_TYPE],
                        MenuItem::FIELD_ICON => $subitem[MenuItem::FIELD_ICON],
                        MenuItem::FIELD_LABEL => $subitem[MenuItem::FIELD_LABEL],
                        MenuItem::FIELD_URL => $subitem[MenuItem::FIELD_URL],
                    ]);

                    $menuItem[Menus::FIELD_CHILDREN][] = $page->id;
                }

                $menu[] = $menuItem;
            }

            else
            {
                $page = MenuItem::create([
                    MenuItem::FIELD_TYPE => $item[MenuItem::FIELD_TYPE],
                    MenuItem::FIELD_ICON => $item[MenuItem::FIELD_ICON],
                    MenuItem::FIELD_LABEL => $item[MenuItem::FIELD_LABEL],
                    MenuItem::FIELD_URL => $item[MenuItem::FIELD_URL],
                ]);

                $menuItem = [
                    MenuItem::FIELD_ID => $page->id,
                ];

                $menu[] = $menuItem;
            }
        }

        Menu::create([
            Menu::FIELD_TITLE => 'backend',
            Menu::FIELD_TEMPLATE => $menu,
        ]);
    }

    #endregion
}
