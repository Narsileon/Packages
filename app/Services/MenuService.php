<?php

namespace App\Services;

#region USE

use App\Constants\MenuConstants;
use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

#endregion

class MenuService
{
    #region PUBLIC METHODS

    public static function get()
    {
        $backend = self::getBackendMenu();
        $footer = [];

        return compact(
            'backend',
            'footer',
        );
    }

    public static function createBackendMenu($user_id)
    {
        $menu = [];

        foreach(MenuConstants::DEFAULT_BACKEND_MENU as $item)
        {
            if ($item[MenuItem::FIELD_TYPE] == MenuConstants::TYPE_CATEGORY)
            {
                $category = MenuItem::create([
                    MenuItem::FIELD_TYPE => $item[MenuItem::FIELD_TYPE],
                    MenuItem::FIELD_ICON => $item[MenuItem::FIELD_ICON],
                    MenuItem::FIELD_LABEL => $item[MenuItem::FIELD_LABEL],
                ]);

                $menuItem = [
                    MenuItem::FIELD_ID => $category->id,
                    MenuConstants::FIELD_CHILDREN => [],
                ];

                foreach($item[MenuConstants::FIELD_CHILDREN] as $subitem)
                {
                    $page = MenuItem::create([
                        MenuItem::FIELD_TYPE => $subitem[MenuItem::FIELD_TYPE],
                        MenuItem::FIELD_ICON => $subitem[MenuItem::FIELD_ICON],
                        MenuItem::FIELD_LABEL => $subitem[MenuItem::FIELD_LABEL],
                        MenuItem::FIELD_URL => $subitem[MenuItem::FIELD_URL],
                    ]);

                    $menuItem[MenuConstants::FIELD_CHILDREN][] = [
                        MenuItem::FIELD_ID => $page->id,
                    ];
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
            Menu::FIELD_USER_ID => $user_id,
            Menu::FIELD_TITLE => 'backend',
            Menu::FIELD_TEMPLATE => $menu,
        ]);
    }

    #endregion

    #region PRIVATE METHODS

    private static function getBackendMenu()
    {
        $backendMenu = Auth::user()->menus->where(Menu::FIELD_TITLE, '=', 'backend')->pluck(Menu::FIELD_TEMPLATE)->toArray()[0];

        $menu = self::getMenuItem($backendMenu);

        return $menu;
    }

    private static function getMenuItem($items)
    {
        $menu = [];

        foreach($items as $item)
        {
            $menuItem = MenuItem::find($item[MenuItem::FIELD_ID]);

            if (!empty($item[MenuConstants::FIELD_CHILDREN]))
            {
                $menuItem[MenuConstants::FIELD_CHILDREN] = self::getMenuItem($item[MenuConstants::FIELD_CHILDREN]);

                Log::debug($menuItem);
            }

            $menu[] = $menuItem;
        }

        return $menu;
    }

    #endregion
}
