<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Models\Session\Locale;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class LanguageController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $locales = Locale::search(request('search'))->get();

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backoffice/Languages/Index', compact(
            'locales',
            'filters',
        ));
    }

    public function update(HttpRequest $request)
    {
        $request->collect()->each(function($locale) {
            Locale::where(Locale::FIELD_ID, $locale[Locale::FIELD_ID])->update($locale);
        });

        return redirect(route('backoffice.languages'));
    }

    #endregion
}
