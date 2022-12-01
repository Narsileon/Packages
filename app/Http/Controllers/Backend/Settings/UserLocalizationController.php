<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\LocalizationUpdateRequest;
use App\Models\UserLocalization;
use App\Models\UserTemplates;
use App\Services\LocalizationService;
use App\Services\TemplateService;
use App\Templates\LocalizationTemplate;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class UserLocalizationController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $columns = LocalizationTemplate::COLUMNS;
        $template = TemplateService::get(UserTemplates::FIELD_TEMPLATE_LOCALIZATIONS, UserTemplates::TYPE_CUSTOM, LocalizationTemplate::DEFAULT_TEMPLATE);

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

    public function update(LocalizationUpdateRequest $request, UserLocalization $localization)
    {
        $attributes = $request->validated();

        $customLocalization = (object)[];

        foreach($attributes['dictionary'] as $item) {
            $customLocalization->{ $item['key'] } = $item['custom_value'];
        }

        $attributes['dictionary'] = (object)$customLocalization;

        $localization->update($attributes);

        return redirect(route('admin.user_localizations.index'))
            ->with('success', 'dictionary_updated');
    }

    #endregion
}
