<?php

namespace App\Http\Controllers\Backend\Management;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Management\UserRoleCreateRequest;
use App\Http\Requests\Backend\Management\UserRoleUpdateRequest;
use App\Http\Resources\Backend\Management\UserPermissionCollection;
use App\Http\Resources\Backend\Management\UserRoleCollection;
use App\Http\Resources\Backend\Management\UserRoleResource;
use App\Models\Backend\UserSettings;
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
        $this->authorize('view', UserRole::class);

        $columns = RoleTemplate::COLUMNS;

        $template = Auth::user()->{ User::ATTRIBUTE_TEMPLATES } ? Auth::user()->{ User::ATTRIBUTE_TEMPLATES }->{ UserSettings::FIELD_ROLES } : RoleTemplate::DEFAULT_TEMPLATE;

        $collection = UserRole::query()
            ->search($template)
            ->sort($template);

        if (array_key_exists('current', $template) && $template['current'] != null)
        {
            $template['list'][$template['current']] = $collection->pluck($template['current'])->toArray();
        }

        $roles = new UserRoleCollection($collection->paginate(10));

        return Inertia::render('Backend/Roles/Index', compact(
            'columns',
            'template',
            'roles',
        ));
    }

    public function create()
    {
        $this->authorize('create', UserRole::class);

        $permissions = $this->getAllPermissions();

        return Inertia::render('Backend/Roles/Create', compact(
            'permissions',
        ));
    }

    public function store(UserRoleCreateRequest $request)
    {
        $this->authorize('create', UserRole::class);

        $attributes = $request->validated();

        $role = Role::create($attributes);

        $role->syncPermissions($attributes['permissions']);

        return redirect(route('admin.roles.index'))->with('success', 'role_created');
    }

    public function show(Role $role)
    {
        $this->authorize('view', UserRole::class);

        $role = new UserRoleResource($role);

        return Inertia::render('Backend/Roles/Show', compact(
            'role',
        ));
    }

    public function edit(Role $role)
    {
        $this->authorize('update', UserRole::class);

        $role = new UserRoleResource($role);
        $permissions = $this->getAllPermissions();

        return Inertia::render('Backend/Roles/Edit', compact(
            'role',
            'permissions',
        ));
    }

    public function update(UserRoleUpdateRequest $request, Role $role)
    {
        $this->authorize('update', UserRole::class);

        $attributes = $request->validated();

        $role->update($attributes);
        $role->syncPermissions($attributes['permissions']);

        return redirect(route('admin.roles.index'))->with('success', 'role_updated');
    }

    public function destroy(Role $role)
    {
        $this->authorize('delete', UserRole::class);

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
