<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use Inertia\Inertia;

#endregion

class LanguageController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke()
    {
        return Inertia::render('Backoffice/Languages/Index');
    }

    #endregion
}
