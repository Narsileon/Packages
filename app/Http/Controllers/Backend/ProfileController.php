<?php

namespace App\Http\Controllers\Backend;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Resources\Backend\Management\UserPermissionCollection;
use App\Http\Resources\Backend\Management\UserResource;
use App\Models\User;
use App\Models\UserPermission;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class ProfileController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $permissions = new UserPermissionCollection(UserPermission::all());
        $user = new UserResource(Auth::user());
        $userSettings = $user->{ User::ATTRIBUTE_SETTINGS };

        return Inertia::render('Backend/Profile/Index', compact(
            'permissions',
            'user',
            'userSettings',
        ));
    }

    #endregion
}
