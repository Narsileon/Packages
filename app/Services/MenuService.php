<?php

namespace App\Services;

#region USE

use App\Models\MenuItem;
use App\Models\UserMenu;
use App\Templates\Menus\BackendMenuTemplate;
use Illuminate\Support\Facades\Auth;

#endregion

class MenuService
{
    #region PUBLIC METHODS

    public static function createBackendMenu($user_id)
    {
        $menu = [];

        foreach(BackendMenuTemplate::DEFAULT as $item)
        {
            if ($item[MenuItem::FIELD_TYPE] == MenuItem::TYPE_CATEGORY)
            {
                $category = MenuItem::create([
                    MenuItem::FIELD_TYPE => $item[MenuItem::FIELD_TYPE],
                    MenuItem::FIELD_ICON => $item[MenuItem::FIELD_ICON],
                    MenuItem::FIELD_LABEL => $item[MenuItem::FIELD_LABEL],
                ]);

                $menuItem = [
                    MenuItem::FIELD_ID => $category->id,
                    MenuItem::FIELD_CHILDREN => [],
                ];

                foreach($item[MenuItem::FIELD_CHILDREN] as $subitem)
                {
                    $page = MenuItem::create([
                        MenuItem::FIELD_TYPE => $subitem[MenuItem::FIELD_TYPE],
                        MenuItem::FIELD_ICON => $subitem[MenuItem::FIELD_ICON],
                        MenuItem::FIELD_LABEL => $subitem[MenuItem::FIELD_LABEL],
                        MenuItem::FIELD_URL => $subitem[MenuItem::FIELD_URL],
                    ]);

                    $menuItem[MenuItem::FIELD_CHILDREN][] = [
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

        UserMenu::create([
            UserMenu::FIELD_USER_ID => $user_id,
            UserMenu::FIELD_TITLE => 'Default Backend Menu',
            UserMenu::FIELD_TYPE => UserMenu::TYPE_BACKEND_MENU,
            UserMenu::FIELD_TEMPLATE => $menu,
        ]);
    }

    public static function getMenuID($layout)
    {
        $menu = [];

        foreach($layout as $item)
        {
            if ($item[MenuItem::FIELD_TYPE] == MenuItem::TYPE_CATEGORY)
            {
                $menuItem = [
                    MenuItem::FIELD_ID => $item[MenuItem::FIELD_ID],
                    MenuItem::FIELD_CHILDREN => [],
                ];

                foreach($item[MenuItem::FIELD_CHILDREN] as $subitem)
                {
                    $menuItem[MenuItem::FIELD_CHILDREN][] = [
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

            if (!empty($item[MenuItem::FIELD_CHILDREN]))
            {
                $menuItem[MenuItem::FIELD_CHILDREN] = self::getMenuItem($item[MenuItem::FIELD_CHILDREN]);
            }

            $menu[] = $menuItem;
        }

        return $menu;
    }

    public static function getBackendMenu($type, $default)
    {
        $menu = Auth::user()->menus
            ->where(UserMenu::FIELD_ACTIVE, '=', true)
            ->where(UserMenu::FIELD_TYPE, '=', $type)
            ->first();

        return $menu ? self::getMenuItem($menu->{ UserMenu::FIELD_TEMPLATE }) : $default;
    }

    #endregion
}
