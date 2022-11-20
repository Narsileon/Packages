<?php

namespace App\Http\Controllers\Backend\Management;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Management\UserCreateRequest;
use App\Http\Requests\Backend\Management\UserUpdateRequest;
use App\Http\Resources\Backend\Management\UserCollection;
use App\Http\Resources\Backend\Management\UserPermissionCollection;
use App\Http\Resources\Backend\Management\UserResource;
use App\Http\Resources\Backend\Management\UserRoleCollection;
use App\Models\Backend\Template;
use App\Models\User;
use App\Models\UserPermission;
use App\Models\UserRole;
use App\Templates\UserTemplate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class UserController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $header = UserTemplate::COLUMNS;

        $user = Auth::user();

        $template = $user->{ User::ATTRIBUTE_TEMPLATES } ? $user->{ User::ATTRIBUTE_TEMPLATES }->{ Template::FIELD_USERS } : UserTemplate::DEFAULT_TEMPLATE;

        $users = new UserCollection(User::query()
            ->search(array_key_exists('globalSearch', $template) ? $template['globalSearch'] : '')
            ->newSort($template[Tables::PROPERTY_SORTING])
            ->paginate(5));

        return Inertia::render('Backend/Users/Index', compact(
            'header',
            'template',
            'users',
        ));
    }

    public function create()
    {
        $roles = $this->getAllRoles();
        $permissions = $this->getAllPermissions();

        return Inertia::render('Backend/Users/Create', compact(
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

        return Inertia::render('Backend/Users/Show', compact(
            'user',
        ));
    }

    public function edit(User $user)
    {
        $user = new UserResource($user);

        $roles = $this->getAllRoles();
        $permissions = $this->getAllPermissions();

        return Inertia::render('Backend/Users/Edit', compact(
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
