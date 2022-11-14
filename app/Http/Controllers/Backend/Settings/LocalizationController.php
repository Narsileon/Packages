<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class LocalizationController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $localizations = collect(json_decode(Auth::user()
            ->localizations, true));

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backend/Dictionary/Index', compact(
            'localizations',
            'filters',
        ));
    }

    #endregion
}
