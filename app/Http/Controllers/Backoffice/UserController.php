<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Acl\Permissions;
use App\Acl\Roles;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backoffice\Users\UserCreateRequest;
use App\Http\Requests\Backoffice\Users\UserUpdateRequest;
use App\Http\Resources\Backoffice\Users\UserCollection;
use App\Http\Resources\Backoffice\Users\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class UserController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        return Inertia::render("Backoffice/Users/Index", [
            "users" => new UserCollection(User::query()
                ->when(Request::input("search"), function ($query, $search) {
                    $query->where(User::FIELD_USERNAME, "like", "%{$search}%");
                })
                ->when(Request::input("sort"), function ($query, $sort) {
                    $query->orderBy(Request::input("field"), $sort);
                })
                ->paginate(10)
                ->withQueryString()),

            "filters" => Request::only(["search"]),
        ]);
    }

    public function create()
    {
        return Inertia::render("Backoffice/Users/Create", [
            "roles" => Roles::getConstants(),
            "permissions" => Permissions::getConstants(),
        ]);
    }

    public function store(UserCreateRequest $request)
    {
        $attributes = $request->validated();

        User::create($attributes);

        return redirect(route("backoffice.users.index"));
    }

    public function edit(User $user)
    {
        return Inertia::render("Backoffice/Users/Edit", [
            "user" => new UserResource($user),
            "roles" => Roles::getConstants(),
            "permissions" => Permissions::getConstants(),
        ]);
    }

    public function update(UserUpdateRequest $request, User $user)
    {
        $attributes = $request->validated();

        $user->update($attributes);

        return redirect(route("backoffice.users.index"));
    }

    public function destroy(User $user)
    {
        $user->delete();

        return back();
    }

    #endregion
}
