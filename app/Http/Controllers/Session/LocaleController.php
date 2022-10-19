<?php

namespace App\Http\Controllers\Session;

#region USE

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;

#endregion

class LocaleController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke(string $locale)
    {
        Inertia::share("localization.locale", App::getLocale());

        App::setLocale($locale);

        session()->put('locale', $locale);

        return back();
    }

    #endregion
}
