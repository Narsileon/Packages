<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\MenuCreateRequest;
use App\Http\Requests\Backend\Settings\MenuUpdateRequest;
use App\Http\Resources\Backend\Settings\MenuItemResource;
use App\Models\Menu;
use App\Models\MenuItem;
use App\Services\MenuService;
use Inertia\Inertia;

#endregion

class MenuController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $menus = Menu::all();

        foreach($menus as $key => $value)
        {
            $menus[$key]->{ Menu::FIELD_TEMPLATE } = MenuService::getMenuItems($menus[$key]->{ Menu::FIELD_TEMPLATE });
        }

        $menuItems = MenuItemResource::collection(MenuItem::all());

        return Inertia::render('Backend/Settings/Menus/Index', compact(
            'menus',
            'menuItems',
        ));
    }

    public function store(MenuCreateRequest $request)
    {
        $attributes = $request->validated();

        $attributes[Menu::FIELD_TEMPLATE] = MenuService::getMenuID($attributes[Menu::FIELD_TEMPLATE]);

        Menu::create($attributes);

        return redirect(route('admin.menus.index'))
            ->with('success', 'menu_created');
    }

    public function update(MenuUpdateRequest $request, Menu $menu)
    {
        $attributes = $request->validated();

        $attributes[Menu::FIELD_TEMPLATE] = MenuService::getMenuID($attributes[Menu::FIELD_TEMPLATE]);

        $menu->update($attributes);

        return redirect(route('admin.menus.index'))
            ->with('success', 'menu_updated');
    }

    #endregion
}
