<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class DictionaryController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backoffice/Dictionary/Index', compact(
            'filters',
        ));
    }

    #endregion
}
