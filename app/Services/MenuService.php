<?php

namespace App\Services;

#region USE

use App\Constants\Menus;
use App\Http\Resources\Backend\Management\MenuItemResource;
use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Support\Facades\Log;

#endregion

class MenuService
{
    #region PUBLIC METHODS

    public static function getMenu($type)
    {
        $menu = Menu::where(Menu::FIELD_TYPE, '=', $type)->where(Menu::FIELD_ACTIVE, '=', true)->first();

        return $menu ? self::getMenuItems($menu->{ Menu::FIELD_TEMPLATE }) : Menus::getDefaultMenu($type);
    }

    public static function createMenuItem($template)
    {
        $menuItem = MenuItem::create([
            MenuItem::FIELD_SLUG => $template[MenuItem::FIELD_SLUG],
            MenuItem::FIELD_TYPE => $template[MenuItem::FIELD_TYPE],
            MenuItem::FIELD_ICON => $template[MenuItem::FIELD_ICON] ?? null,
            MenuItem::FIELD_LABEL => $template[MenuItem::FIELD_LABEL],
            MenuItem::FIELD_URL => $template[MenuItem::FIELD_URL] ?? null,
        ]);

        if ($menuItem[MenuItem::ATTRIBUTE_PERMISSIONS])
        {
            $menuItem->givePermissionTo($template[MenuItem::ATTRIBUTE_PERMISSIONS]);
        }
    }

    public static function getMenuItem($slug)
    {
        return MenuItem::where(MenuItem::FIELD_SLUG, '=', $slug)->first();
    }

    public static function getMenuID($layout)
    {
        $menu = [];

        foreach($layout as $key=>$value)
        {
            $menuItem = self::getMenuItem($key);

            if ($menuItem->{ MenuItem::FIELD_TYPE } == Menus::TYPE_CATEGORY)
            {
                $menuItem = [
                    MenuItem::FIELD_ID => $menuItem->{ MenuItem::FIELD_ID },
                    MenuItem::FIELD_CHILDREN => [],
                ];

                foreach($value as $page)
                {
                    $menuItem[MenuItem::FIELD_CHILDREN][] = [
                        MenuItem::FIELD_ID => self::getMenuItem($page)->{ MenuItem::FIELD_ID },
                    ];
                }

                $menu[] = $menuItem;
            }

            else
            {
                $menu[] = $menuItem->{ MenuItem::FIELD_ID };
            }
        }

        return $menu;
    }

    public static function getMenuItems($layout)
    {
        $menu = [];

        foreach($layout as $item)
        {
            $menuItem = MenuItem::find($item[MenuItem::FIELD_ID]);

            if (!empty($item[MenuItem::FIELD_CHILDREN]))
            {
                $menuItem[MenuItem::FIELD_CHILDREN] = self::getMenuItems($item[MenuItem::FIELD_CHILDREN]);
            }

            $menu[] = new MenuItemResource($menuItem);
        }

        Log::debug($menu);

        return $menu;
    }

    #endregion
}
