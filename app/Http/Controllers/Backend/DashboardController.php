<?php

namespace App\Http\Controllers\Backend;

#region USE

use App\Http\Controllers\Controller;
use Inertia\Inertia;

#endregion

class DashboardController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke()
    {
        return Inertia::render('Backend/Dashboard/Index');
    }

    #endregion
}
