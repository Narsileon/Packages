<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\LocalizationUpdateRequest;
use App\Models\Backend\Localization;
use App\Models\Backend\Template;
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

        $template = Auth::user()->{ User::ATTRIBUTE_TEMPLATES } ? Auth::user()->{ User::ATTRIBUTE_TEMPLATES }->{ Template::FIELD_LOCALIZATIONS } : LocalizationTemplate::DEFAULT_TEMPLATE;

        $defaultLocalization = collect(LocalizationService::get(false))['dictionary']['common'];
        $customLocalization = collect(json_decode(Auth::user()->localizations, true));

        $test = [];

        foreach($defaultLocalization as $key => $value) {
            array_push($test, [
                'key' => $key,
                'value' => $value,
                'custom_value' => $customLocalization['dictionary'][$key],
            ]);
        }

        $customLocalization['dictionary'] = $test;

        return Inertia::render('Backend/Dictionary/Index', compact(
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
