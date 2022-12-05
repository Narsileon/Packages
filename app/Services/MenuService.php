<?php

namespace App\Services;

#region USE

use App\Models\MenuItem;
use App\Models\UserMenu;
use Illuminate\Support\Facades\Auth;

#endregion

class MenuService
{
    #region PUBLIC METHODS

    public static function createMenuItem($menu)
    {
        foreach($menu as $item)
        {
            if ($item[MenuItem::FIELD_TYPE] == MenuItem::TYPE_CATEGORY)
            {
                MenuItem::create([
                    MenuItem::FIELD_SLUG => $item[MenuItem::FIELD_SLUG],
                    MenuItem::FIELD_TYPE => $item[MenuItem::FIELD_TYPE],
                    MenuItem::FIELD_ICON => $item[MenuItem::FIELD_ICON],
                    MenuItem::FIELD_LABEL => $item[MenuItem::FIELD_LABEL],
                ]);

                foreach($item[MenuItem::FIELD_CHILDREN] as $subitem)
                {
                    MenuItem::create($subitem);
                }
            }

            else
            {
                MenuItem::create($item);
            }
        }
    }

    public static function getMenuID($layout)
    {
        $menu = [];

        foreach($layout as $item)
        {
            if ($item[MenuItem::FIELD_TYPE] == MenuItem::TYPE_CATEGORY)
            {
                $menuItem = [
                    MenuItem::FIELD_ID => MenuItem::where(MenuItem::FIELD_SLUG, $item[MenuItem::FIELD_SLUG])->first()->{ MenuItem::FIELD_ID },
                    MenuItem::FIELD_CHILDREN => [],
                ];

                foreach($item[MenuItem::FIELD_CHILDREN] as $subitem)
                {
                    $menuItem[MenuItem::FIELD_CHILDREN][] = [
                        MenuItem::FIELD_ID => MenuItem::where(MenuItem::FIELD_SLUG, $subitem[MenuItem::FIELD_SLUG])->first()->{ MenuItem::FIELD_ID },
                    ];
                }

                $menu[] = $menuItem;
            }

            else
            {
                $menuItem = [
                    MenuItem::FIELD_ID => MenuItem::where(MenuItem::FIELD_SLUG, $item[MenuItem::FIELD_SLUG])->first()->{ MenuItem::FIELD_ID },
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
