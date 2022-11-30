<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Management\MenuItemCreateRequest;
use App\Http\Requests\Backend\Settings\MenuItemUpdateRequest;
use App\Models\MenuItem;

#endregion

class MenuItemController extends Controller
{
    #region PUBLIC METHODS

    public function store(MenuItemCreateRequest $request)
    {
        $attributes = $request->validated();

        MenuItem::create($attributes);

        return back()
            ->with('success', 'menu_item_created');;
    }

    public function update(MenuItemUpdateRequest $request, MenuItem $menuItem)
    {
        $attributes = $request->validated();

        $menuItem->update($attributes);

        return back()
            ->with('success', 'menu_item_updated');
    }

    #endregion
}
