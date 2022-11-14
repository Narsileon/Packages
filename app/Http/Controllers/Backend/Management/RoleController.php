<?php

namespace App\Http\Controllers\Backend\Management;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Management\UserRoleCreateRequest;
use App\Http\Requests\Backend\Management\UserRoleUpdateRequest;
use App\Http\Resources\Backend\Users\UserPermissionCollection;
use App\Http\Resources\Backend\Users\UserRoleCollection;
use App\Http\Resources\Backend\Users\UserRoleResource;
use App\Models\UserPermission;
use App\Models\UserRole;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

#endregion

class RoleController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $roles = new UserRoleCollection(UserRole::query()
            ->search(request('search'))
            ->sort()
            ->paginate(10)
        );

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backend/Roles/Index', compact(
            'roles',
            'filters',
        ));
    }

    public function create()
    {
        $permissions = $this->getAllPermissions();

        return Inertia::render('Backend/Roles/Create', compact(
            'permissions',
        ));
    }

    public function store(UserRoleCreateRequest $request)
    {
        $attributes = $request->validated();

        $role = Role::create($attributes);

        $role->syncPermissions($attributes['permissions']);

        return redirect(route('admin.roles.index'))->with('success', 'role_created');
    }

    public function show(Role $role)
    {
        $role = new UserRoleResource($role);

        return Inertia::render('Backend/Roles/Show', compact(
            'role',
        ));
    }

    public function edit(Role $role)
    {
        $role = new UserRoleResource($role);
        $permissions = $this->getAllPermissions();

        return Inertia::render('Backend/Roles/Edit', compact(
            'role',
            'permissions',
        ));
    }

    public function update(UserRoleUpdateRequest $request, Role $role)
    {
        $attributes = $request->validated();

        $role->update($attributes);
        $role->syncPermissions($attributes['permissions']);

        return redirect(route('admin.roles.index'))->with('success', 'role_updated');
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return back()->with('success', 'role_deleted');;
    }

    #endregion

    #region PRIVATE METHODS

    private function getAllPermissions()
    {
        return new UserPermissionCollection(UserPermission::All());
    }

    #endregion
}
