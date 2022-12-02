<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\UserMenuCreateRequest;
use App\Http\Requests\Backend\Settings\UserMenuUpdateRequest;
use App\Http\Resources\Backend\Settings\MenuItemResource;
use App\Models\MenuItem;
use App\Models\User;
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

        return Inertia::render('Backend/Settings/Menus/Index', compact(
            'menus',
            'menuItems',
        ));
    }

    public function store(UserMenuCreateRequest $request)
    {
        $attributes = $request->validated();

        $attributes[UserMenu::FIELD_USER_ID] = Auth::user()->{ User::FIELD_ID };
        $attributes[UserMenu::FIELD_TEMPLATE] = MenuService::getMenuID($attributes[UserMenu::FIELD_TEMPLATE]);

        UserMenu::create($attributes);

        return redirect(route('admin.user_menus.index'))
            ->with('success', 'user_menu_created');
    }

    public function update(UserMenuUpdateRequest $request, UserMenu $userMenu)
    {
        $attributes = $request->validated();

        $attributes[UserMenu::FIELD_USER_ID] = Auth::user()->{ User::FIELD_ID };
        $attributes[UserMenu::FIELD_TEMPLATE] = MenuService::getMenuID($attributes[UserMenu::FIELD_TEMPLATE]);

        $userMenu->update($attributes);

        return redirect(route('admin.user_menus.index'))
            ->with('success', 'user_menu_updated');
    }

    #endregion
}
