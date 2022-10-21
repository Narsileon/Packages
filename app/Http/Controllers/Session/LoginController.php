<?php

namespace App\Http\Controllers\Session;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Session\LoginCreateRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class LoginController extends Controller
{
    #region PUBLIC METHODS

    public function create()
    {
        return Inertia::render("Session/Login/Create");
    }

    public function store(LoginCreateRequest $request)
    {
        $credentials = $request->validated();

        if (!Auth::attempt($credentials)) {
            return back()->withErrors([
                User::FIELD_EMAIL => __("auth.failed"),
                User::FIELD_PASSWORD => __("auth.password"),
            ]);         
        }

        session()->regenerate();

        return redirect()->intended()->with("success", "login");
    }

    #endregion
}
