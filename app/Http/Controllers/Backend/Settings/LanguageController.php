<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Resources\Backend\Settings\LanguageResource;
use App\Models\Backend\Language;
use App\Models\Backend\Template;
use App\Models\User;
use App\Templates\LanguageTemplate;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class LanguageController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $columns = LanguageTemplate::COLUMNS;

        $user = Auth::user();

        $template = $user->{ User::ATTRIBUTE_TEMPLATES } ? $user->{ User::ATTRIBUTE_TEMPLATES }->{ Template::FIELD_LANGUAGES } : LanguageTemplate::DEFAULT_TEMPLATE;

        $languages = LanguageResource::collection(Language::search(array_key_exists(Tables::PROPERTY_GLOBAL_FILTER, $template) ? $template[Tables::PROPERTY_GLOBAL_FILTER] : '')->get());

        return Inertia::render('Backend/Languages/Index', compact(
            'columns',
            'template',
            'languages',
        ));
    }

    public function update(HttpRequest $request)
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
