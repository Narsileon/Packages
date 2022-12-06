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
use App\Models\UserPermission;
use App\Models\UserRole;
use App\Services\TemplateService;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

#endregion

class RoleController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $this->authorize('view', UserRole::class);

        $tableSettings = TemplateService::get(Tables::TABLE_ROLES);

        $collection = UserRole::query()
            ->search($tableSettings)
            ->sort($tableSettings);

        $tableSettings = TemplateService::applyTableSettings($collection, $tableSettings);

        $collection = new UserRoleCollection($collection->paginate(10));

        return Inertia::render('Backend/Management/Roles/Index', compact(
            'collection',
            'tableSettings',
        ));
    }

    public function create()
    {
        $this->authorize('create', UserRole::class);

        $permissions = $this->getAllPermissions();

        return Inertia::render('Backend/Management/Roles/Create', compact(
            'permissions',
        ));
    }

    public function store(UserRoleCreateRequest $request)
    {
        $this->authorize('create', UserRole::class);

        $attributes = $request->validated();

        $role = Role::create($attributes);

        $role->syncPermissions($attributes['permissions']);

        return redirect(route('admin.roles.index'))
            ->with('success', 'role_created');
    }

    public function show(Role $role)
    {
        $this->authorize('view', UserRole::class);

        $role = new UserRoleResource($role);

        return Inertia::render('Backend/Management/Roles/Show', compact(
            'role',
        ));
    }

    public function edit(Role $role)
    {
        $this->authorize('update', UserRole::class);

        $role = new UserRoleResource($role);
        $permissions = $this->getAllPermissions();

        return Inertia::render('Backend/Management/Roles/Edit', compact(
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

        return redirect(route('admin.roles.index'))
            ->with('success', 'role_updated');
    }

    public function destroy(Role $role)
    {
        $this->authorize('delete', UserRole::class);

        $role->delete();

        return back()
            ->with('success', 'role_deleted');;
    }

    #endregion

    #region PRIVATE METHODS

    private function getAllPermissions()
    {
        return new UserPermissionCollection(UserPermission::All());
    }

    #endregion
}
