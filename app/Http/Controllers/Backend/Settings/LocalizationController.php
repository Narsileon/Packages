<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\LocalizationUpdateRequest;
use App\Models\Backend\Localization;
use App\Services\LocalizationService;
use App\Services\TemplateService;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;

#endregion

class LocalizationController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $tableSettings = TemplateService::get(Tables::TABLE_LOCALIZATIONS);

        $locale = App::getLocale();

        $defaultLocalization = LocalizationService::getDefaultLocalization();
        $customLocalization = LocalizationService::getCustomLocalization();

        return Inertia::render('Backend/Settings/Localizations/Index', compact(
            'defaultLocalization',
            'customLocalization',
            'tableSettings',
        ));
    }

    public function update(LocalizationUpdateRequest $request, Localization $localization)
    {
        $attributes = $request->validated();

        $localization->update($attributes);

        return redirect(route('admin.localizations.index'))
            ->with('success', 'translation_updated');
    }

    #endregion
}
