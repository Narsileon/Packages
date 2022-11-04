<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Models\Session\Locale;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class LanguageController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke()
    {
        $locales = Locale::search(request('search'))
            ->sort()
            ->get();

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backoffice/Languages/Index', compact(
            'locales',
            'filters',
        ));
    }

    #endregion
}
