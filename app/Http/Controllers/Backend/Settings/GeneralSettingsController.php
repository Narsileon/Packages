<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\GeneralSettingsUpdateRequest;
use App\Models\Backend\GeneralSettings;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

#endregion

class GeneralSettingsController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $generalSettings = DB::table('general_settings')->first();

        return Inertia::render('Backend/Settings/GeneralSettings/Index', compact(
            'generalSettings'
        ));
    }

    public function update(GeneralSettingsUpdateRequest $request)
    {
        $attributes = $request->validated();

        DB::table('general_settings')
            ->where(GeneralSettings::FIELD_ID, $request->{ GeneralSettings::FIELD_ID })
            ->update($attributes);

        return redirect(route('admin.general_settings'))
            ->with('success', 'general_settings_updated');
    }

    #endregion
}