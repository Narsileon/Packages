<?php

namespace App\Http\Controllers\Backend\Management;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Management\UserRoleCreateRequest;
use App\Http\Requests\Backend\Management\UserRoleUpdateRequest;
use App\Http\Resources\Backend\Management\UserPermissionCollection;
use App\Http\Resources\Backend\Management\UserRoleCollection;
use App\Http\Resources\Backend\Management\UserRoleResource;
use App\Models\Backend\Template;
use App\Models\User;
use App\Models\UserPermission;
use App\Models\UserRole;
use App\Templates\RoleTemplate;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

#endregion

class RoleController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $header = RoleTemplate::COLUMNS;

        $user = Auth::user();

        $template = $user->{ User::ATTRIBUTE_TEMPLATES } ? $user->{ User::ATTRIBUTE_TEMPLATES }->{ Template::FIELD_ROLES } : RoleTemplate::DEFAULT_TEMPLATE;

        $roles = new UserRoleCollection(UserRole::query()
            ->search(array_key_exists(Tables::PROPERTY_GLOBAL_FILTER, $template) ? $template[Tables::PROPERTY_GLOBAL_FILTER] : '')
            ->sort($template)
            ->paginate(10));

        return Inertia::render('Backend/Roles/Index', compact(
            'header',
            'template',
            'roles',
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
