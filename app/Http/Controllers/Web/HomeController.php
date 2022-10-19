<?php

namespace App\Http\Controllers\Web;

#region USE

use App\Http\Controllers\Controller;
use Inertia\Inertia;

#endregion

class HomeController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke()
    {
        return Inertia::render('Web/Home/Index');
    }

    #endregion
}