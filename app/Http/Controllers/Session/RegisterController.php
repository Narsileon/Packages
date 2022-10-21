<?php

namespace App\Http\Controllers\Session;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Session\RegisterCreateRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class RegisterController extends Controller
{
    #region PUBLIC METHODS

    public function create()
    {
        return Inertia::render("Session/Register/Create");
    }

    public function store(RegisterCreateRequest $request)
    {
        $attributes = $request->validated();

        $user = User::create($attributes);

        Auth::login($user);

        return redirect(route("home"))->with("success", "register");
    }

    #endregion
}
