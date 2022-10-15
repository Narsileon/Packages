<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use Inertia\Inertia;

#endregion

class DashboardController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke()
    {
        return Inertia::render('backoffice.dashboard.index');
    }

    #endregion
}
