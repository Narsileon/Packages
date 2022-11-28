<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Resources\Backend\Settings\MenuItemCollection;
use App\Models\MenuItem;
use Inertia\Inertia;

#endregion

class MenuController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $menuItems = new MenuItemCollection(MenuItem::all());

        return Inertia::render('Backend/Settings/Menus/Index', compact(
            'menuItems'
        ));
    }

    #endregion
}