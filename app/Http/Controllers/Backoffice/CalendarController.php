<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use Inertia\Inertia;

#endregion

class CalendarController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke()
    {
        return Inertia::render("Backoffice/Calendar/Index");
    }

    #endregion
}
