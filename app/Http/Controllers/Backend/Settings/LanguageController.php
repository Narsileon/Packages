<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Resources\Backend\Settings\LanguageResource;
use App\Models\Backend\Language;
use App\Models\Backend\UserSettings;
use App\Models\User;
use App\Templates\LanguageTemplate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class LanguageController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $columns = LanguageTemplate::COLUMNS;

        $template = Auth::user()->{ User::ATTRIBUTE_TEMPLATES } ? Auth::user()->{ User::ATTRIBUTE_TEMPLATES }->{ UserSettings::FIELD_LANGUAGES } : LanguageTemplate::DEFAULT_TEMPLATE;

        $languages = LanguageResource::collection(Language::all());

        return Inertia::render('Backend/Settings/Languages/Index', compact(
            'columns',
            'template',
            'languages',
        ));
    }

    public function update(Request $request)
    {
        $request->collect()->each(function($locale) {
            Language::where(Language::FIELD_ID, $locale[Language::FIELD_ID])
                ->update([
                    Language::FIELD_ACTIVE => $locale[Language::FIELD_ACTIVE],
                ]);
        });

        return redirect(route('admin.languages'));
    }

    #endregion
}
