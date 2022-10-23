<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backoffice\Users\UserCreateRequest;
use App\Http\Requests\Backoffice\Users\UserUpdateRequest;
use App\Http\Resources\Backoffice\Users\UserCollection;
use App\Http\Resources\Backoffice\Users\UserPermissionCollection;
use App\Http\Resources\Backoffice\Users\UserResource;
use App\Http\Resources\Backoffice\Users\UserRoleCollection;
use App\Models\User;
use App\Models\UserPermission;
use App\Models\UserRole;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class UserController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        return Inertia::render("Backoffice/Users/Index", [
            'users' => new UserCollection(User::query()
                ->filter(request(['id', 'username', 'email']))
                ->sort()
                ->paginate(10)),
            'filters' => [
                'id' => Request::input(User::FIELD_ID),
                'username' => Request::input(User::FIELD_USERNAME),
                'email' => Request::input(User::FIELD_EMAIL),
            ],
        ]);
    }

    public function create()
    {
        $roles = $this->getAllRoles();
        $permissions = $this->getAllPermissions();

        return Inertia::render("Backoffice/Users/Create", compact(
            "roles",
            "permissions",
        ));
    }

    public function store(UserCreateRequest $request)
    {
        $attributes = $request->validated();

        $user = User::create($attributes);

        $user->syncPermissions($request->get("permissions", []));

        return redirect(route("backoffice.users.index"))->with("success", "user_created");
    }

    public function show(User $user)
    {
        $user = new UserResource($user);

        return Inertia::render("Backoffice/Users/Show", compact(
            "user",
        ));
    }

    public function edit(User $user)
    {
        $user = new UserResource($user);

        $roles = $this->getAllRoles();
        $permissions = $this->getAllPermissions();

        return Inertia::render("Backoffice/Users/Edit", compact(
            "user",
            "roles",
            "permissions",
        ));
    }

    public function update(UserUpdateRequest $request, User $user)
    {
        $attributes = $request->validated();

        $user->update($attributes);

        $user->syncRoles($request->get("roles", []));
        $user->syncPermissions($request->get("permissions", []));

        return redirect(route("backoffice.users.index"))->with("success", "user_updated");
    }

    public function destroy(User $user)
    {
        $user->delete();

        return back()->with("success", "user_deleted");;
    }

    #endregion

    #region PRIVATE METHODS

    private function getAllRoles()
    {
        return new UserRoleCollection(UserRole::All());
    }

    private function getAllPermissions()
    {
        return new UserPermissionCollection(UserPermission::All());
    }

    #endregion
}
