<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\GeneralSettingUpdateRequest;
use App\Models\Backend\GeneralSetting;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

#endregion

class GeneralSettingController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $generalSettings = DB::table(Tables::TABLE_GENERAL_SETTINGS)->first();

        return Inertia::render('Backend/Settings/GeneralSettings/Index', compact(
            'generalSettings'
        ));
    }

    public function update(GeneralSettingUpdateRequest $request, GeneralSetting $generalSetting)
    {
        $attributes = $request->validated();

        $generalSetting->update($attributes);

        return redirect(route('admin.generalSettings.index'))
            ->with('success', 'general_settings_updated');
    }

    #endregion
}