<?php

namespace App\Http\Controllers\Session;

#region USE

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;

#endregion

class LocaleController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke(string $locale)
    {
        App::setLocale($locale);

        session()->put('locale', $locale);

        return back();
    }

    #endregion
}
