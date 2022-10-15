<?php

namespace App\Http\Controllers\Session;

#region USE

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

#endregion

class LogoutController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke()
    {
        Auth::logout();

        return redirect(route('home'));
    }

    #endregion
}
