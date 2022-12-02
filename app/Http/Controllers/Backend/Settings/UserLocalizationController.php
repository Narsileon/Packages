<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\UserLocalizationUpdateRequest;
use App\Models\UserLocalization;
use App\Services\LocalizationService;
use App\Services\TemplateService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class UserLocalizationController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $tableSettings = TemplateService::get(Tables::TABLE_USER_LOCALIZATIONS, Tables::CATEGORY_CUSTOM);

        $defaultLocalization = collect(LocalizationService::get(false))['dictionary']['common'];
        $collection = collect(json_decode(Auth::user()->localizations, true));

        $dictionary = [];

        foreach($defaultLocalization as $key => $value) {
            array_push($dictionary, [
                'type' => 'common',
                'key' => $key,
                'value' => $value,
                'custom_value' => $collection['dictionary'][$key] ?? '',
            ]);
        }

        $collection['dictionary'] = $dictionary;

        return Inertia::render('Backend/Settings/UserLocalizations/Index', compact(
            'collection',
            'tableSettings',
        ));
    }

    public function update(UserLocalizationUpdateRequest $request, UserLocalization $localization)
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
