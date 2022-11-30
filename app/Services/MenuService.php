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
            Menu::FIELD_CATEGORY => 'backend',
            Menu::FIELD_TEMPLATE => $menu,
        ]);
    }

    public static function getMenuID($layout)
    {
        $menu = [];

        foreach($layout as $item)
        {
            if ($item[MenuItem::FIELD_TYPE] == MenuConstants::TYPE_CATEGORY)
            {
                $menuItem = [
                    MenuItem::FIELD_ID => $item[MenuItem::FIELD_ID],
                    MenuConstants::FIELD_CHILDREN => [],
                ];

                foreach($item[MenuConstants::FIELD_CHILDREN] as $subitem)
                {
                    $menuItem[MenuConstants::FIELD_CHILDREN][] = [
                        MenuItem::FIELD_ID => $subitem[MenuItem::FIELD_ID],
                    ];
                }

                $menu[] = $menuItem;
            }

            else
            {
                $menuItem = [
                    MenuItem::FIELD_ID => $item[MenuItem::FIELD_ID],
                ];

                $menu[] = $menuItem;
            }
        }

        return $menu;
    }

    public static function getMenuItem($layout)
    {
        $menu = [];

        foreach($layout as $item)
        {
            $menuItem = MenuItem::find($item[MenuItem::FIELD_ID]);

            if (!empty($item[MenuConstants::FIELD_CHILDREN]))
            {
                $menuItem[MenuConstants::FIELD_CHILDREN] = self::getMenuItem($item[MenuConstants::FIELD_CHILDREN]);
            }

            $menu[] = $menuItem;
        }

        return $menu;
    }

    public static function getBackendMenu()
    {
        $backendMenu = Auth::user()->menus
            ->where(Menu::FIELD_ACTIVE, '=', true)
            ->where(Menu::FIELD_CATEGORY, '=', Menu::CATEGORY_BACKEND)
            ->first();

            Log::debug($backendMenu);

        return $backendMenu ? self::getMenuItem($backendMenu->{ Menu::FIELD_TEMPLATE }) : MenuConstants::DEFAULT_BACKEND_MENU;
    }

    #endregion
}
