<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\MenuUpdateRequest;
use App\Http\Resources\Backend\Settings\MenuItemResource;
use App\Models\Menu;
use App\Models\MenuItem;
use App\Services\MenuService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class MenuController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $menus = Auth::user()->menus;

        foreach($menus as $key => $value)
        {
            $menus[$key]->{ Menu::FIELD_TEMPLATE } = MenuService::getMenuItem($menus[$key]->{ Menu::FIELD_TEMPLATE });
        }

        $menuItems = MenuItemResource::collection(MenuItem::all());

        return Inertia::render('Backend/Settings/Menus/Index', compact(
            'menus',
            'menuItems',
        ));
    }

    public function update(MenuUpdateRequest $request, Menu $menu)
    {
        $attributes = $request->validated();

        $attributes[Menu::FIELD_TEMPLATE] = MenuService::getMenuID($attributes[Menu::FIELD_TEMPLATE]);

        $menu->update($attributes);

        return redirect(route('admin.menus'))
            ->with('success', 'menu_updated');
    }

    #endregion
}
