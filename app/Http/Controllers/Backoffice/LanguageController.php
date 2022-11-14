<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Models\Backoffice\Language;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class LanguageController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $languages = Language::search(request('search'))->get();

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backoffice/Languages/Index', compact(
            'languages',
            'filters',
        ));
    }

    public function update(HttpRequest $request)
    {
        $request->collect()->each(function($locale) {
            Language::where(Language::FIELD_ID, $locale[Language::FIELD_ID])->update($locale);
        });

        return redirect(route('backoffice.languages'));
    }

    #endregion
}
