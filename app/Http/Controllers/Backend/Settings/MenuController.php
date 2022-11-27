<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use Inertia\Inertia;

#endregion

class MenuController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $menu = [];

        return Inertia::render('Backend/Settings/Menus/Index', compact(
            'menu'
        ));
    }

    #endregion
}