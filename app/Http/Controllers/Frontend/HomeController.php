<?php

namespace App\Http\Controllers\Frontend;

#region USE

use App\Http\Controllers\Controller;
use Inertia\Inertia;

#endregion

class HomeController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke()
    {
        return Inertia::render('Frontend/Home/Index');
    }

    #endregion
}
