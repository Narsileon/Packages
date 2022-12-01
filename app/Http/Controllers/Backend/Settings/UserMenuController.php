<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\IconConstants;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\UserMenuUpdateRequest;
use App\Http\Resources\Backend\Settings\MenuItemResource;
use App\Models\MenuItem;
use App\Models\UserMenu;
use App\Services\MenuService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class UserMenuController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $menus = Auth::user()->menus;

        foreach($menus as $key => $value)
        {
            $menus[$key]->{ UserMenu::FIELD_TEMPLATE } = MenuService::getMenuItem($menus[$key]->{ UserMenu::FIELD_TEMPLATE });
        }

        $menuItems = MenuItemResource::collection(MenuItem::all());

        $icons = IconConstants::NAMES;

        return Inertia::render('Backend/Settings/Menus/Index', compact(
            'menus',
            'menuItems',
            'icons',
        ));
    }

    public function update(UserMenuUpdateRequest $request, UserMenu $menu)
    {
        $attributes = $request->validated();

        $attributes[UserMenu::FIELD_TEMPLATE] = MenuService::getMenuID($attributes[UserMenu::FIELD_TEMPLATE]);

        $menu->update($attributes);

        return redirect(route('admin.user_menus.index'))
            ->with('success', 'menu_updated');
    }

    #endregion
}
