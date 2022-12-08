<?php

namespace App\Services;

#region USE

use App\Constants\Menus;
use App\Http\Resources\Backend\Management\MenuItemResource;
use App\Models\Menu;
use App\Models\MenuItem;

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

        foreach($layout as $item)
        {
            $menuItem = [
                MenuItem::FIELD_ID => $item[MenuItem::FIELD_ID]
            ];

            if ($item[MenuItem::FIELD_TYPE] == Menus::TYPE_CATEGORY)
            {
                $menuItem = [
                    MenuItem::FIELD_ID => $item[MenuItem::FIELD_ID],
                    MenuItem::FIELD_CHILDREN => [],
                ];

                foreach($item["children"] as $subitem)
                {
                    $menuItem[MenuItem::FIELD_CHILDREN][] = [
                        MenuItem::FIELD_ID => $subitem[MenuItem::FIELD_ID],
                    ];
                }

                $menu[] = $menuItem;
            }

            else
            {
                $menu[] = $menuItem;
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

        return $menu;
    }

    #endregion
}
