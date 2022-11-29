<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\LocalizationUpdateRequest;
use App\Models\Backend\Localization;
use App\Models\Backend\UserSettings;
use App\Models\User;
use App\Services\LocalizationService;
use App\Templates\LocalizationTemplate;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class LocalizationController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $columns = LocalizationTemplate::COLUMNS;

        $template = Auth::user()->{ User::ATTRIBUTE_SETTINGS } ? Auth::user()->{ User::ATTRIBUTE_SETTINGS }->{ UserSettings::FIELD_LOCALIZATIONS } : LocalizationTemplate::DEFAULT_TEMPLATE;

        $defaultLocalization = collect(LocalizationService::get(false))['dictionary']['common'];
        $customLocalization = collect(json_decode(Auth::user()->localizations, true));

        $dictionary = [];

        foreach($defaultLocalization as $key => $value) {
            array_push($dictionary, [
                'type' => 'common',
                'key' => $key,
                'value' => $value,
                'custom_value' => $customLocalization['dictionary'][$key] ?? '',
            ]);
        }

        $customLocalization['dictionary'] = $dictionary;

        return Inertia::render('Backend/Settings/Dictionary/Index', compact(
            'columns',
            'template',
            'customLocalization',
        ));
    }

    public function update(LocalizationUpdateRequest $request, Localization $localization)
    {
        $attributes = $request->validated();

        $customLocalization = (object)[];

        foreach($attributes['dictionary'] as $item) {
            $customLocalization->{ $item['key'] } = $item['custom_value'];
        }

        $attributes['dictionary'] = (object)$customLocalization;

        $localization->update($attributes);

        return redirect(route('admin.dictionary.index'));
    }

    #endregion
}
