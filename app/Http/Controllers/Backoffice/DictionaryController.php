<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Models\Backoffice\Localization;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class DictionaryController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $localizations = Localization::search(request('search'))->get();

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backoffice/Dictionary/Index', compact(
            'localizations',
            'filters',
        ));
    }

    #endregion
}
