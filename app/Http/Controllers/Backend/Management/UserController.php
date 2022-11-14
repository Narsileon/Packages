<?php

namespace App\Http\Controllers\Backend\Management;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Users\UserCreateRequest;
use App\Http\Requests\Backend\Users\UserUpdateRequest;
use App\Http\Resources\Backend\Users\UserCollection;
use App\Http\Resources\Backend\Users\UserPermissionCollection;
use App\Http\Resources\Backend\Users\UserResource;
use App\Http\Resources\Backend\Users\UserRoleCollection;
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
        $users = new UserCollection(User::query()
            ->search(request('search'))
            ->sort()
            ->paginate(10)
        );

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backoffice/Users/Index', compact(
            'users',
            'filters',
        ));
    }

    public function create()
    {
        $roles = $this->getAllRoles();
        $permissions = $this->getAllPermissions();

        return Inertia::render('Backoffice/Users/Create', compact(
            'roles',
            'permissions',
        ));
    }

    public function store(UserCreateRequest $request)
    {
        $attributes = $request->validated();

        $user = User::create($attributes);

        $user->syncPermissions($request->get('permissions', []));

        return redirect(route('admin.users.index'))->with('success', 'user_created');
    }

    public function show(User $user)
    {
        $user = new UserResource($user);

        return Inertia::render('Backoffice/Users/Show', compact(
            'user',
        ));
    }

    public function edit(User $user)
    {
        $user = new UserResource($user);

        $roles = $this->getAllRoles();
        $permissions = $this->getAllPermissions();

        return Inertia::render('Backoffice/Users/Edit', compact(
            'user',
            'roles',
            'permissions',
        ));
    }

    public function update(UserUpdateRequest $request, User $user)
    {
        $attributes = $request->validated();

        $user->update($attributes);

        $user->syncRoles($request->get('roles', []));
        $user->syncPermissions($request->get('permissions', []));

        return redirect(route('admin.users.index'))->with('success', 'user_updated');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return back()->with('success', 'user_deleted');;
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
