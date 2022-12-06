<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Resources\Backend\Settings\LanguageResource;
use App\Models\Backend\Language;
use App\Services\TemplateService;
use Illuminate\Http\Request;
use Inertia\Inertia;

#endregion

class LanguageController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $tableSettings = TemplateService::get(Tables::TABLE_LANGUAGES);

        $collection = LanguageResource::collection(Language::all());

        return Inertia::render('Backend/Settings/Languages/Index', compact(
            'collection',
            'tableSettings',
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

        return redirect(route('admin.languages.index'))
            ->with('success', 'languages_updated');
    }

    #endregion
}
