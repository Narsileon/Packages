<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\LocalizationUpdateRequest;
use App\Models\Backend\Localization;
use App\Services\LocalizationService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class LocalizationController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $defaultLocalization = collect(LocalizationService::get(false))['dictionary']['common'];
        $customLocalization = collect(json_decode(Auth::user()->localizations, true));

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backend/Dictionary/Index', compact(
            'defaultLocalization',
            'customLocalization',
            'filters',
        ));
    }

    public function update(LocalizationUpdateRequest $request, Localization $localization)
    {
        $attributes = $request->validated();

        $localization->update($attributes);

        return redirect(route('admin.dictionary.index'));
    }

    #endregion
}
