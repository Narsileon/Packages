<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

#endregion

class GeneralSettingsController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $generalSettings = null;

        return Inertia::render('Backend/GeneralSettings/Index', compact(
            'generalSettings'
        ));
    }

    public function update(Request $request)
    {
        return redirect(route('admin.general_settings'));
    }

    #endregion
}