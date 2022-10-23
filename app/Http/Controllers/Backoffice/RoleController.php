<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backoffice\Users\UserRoleCreateRequest;
use App\Http\Requests\Backoffice\Users\UserRoleUpdateRequest;
use App\Http\Resources\Backoffice\Users\UserPermissionCollection;
use App\Http\Resources\Backoffice\Users\UserRoleCollection;
use App\Http\Resources\Backoffice\Users\UserRoleResource;
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
        return Inertia::render("Backoffice/Roles/Index", [
            'roles' => new UserRoleCollection(UserRole::query()
                ->filter(request(['id', 'name']))
                ->sort()
                ->paginate(10)),
            'filters' => [
                'id' => Request::input(UserRole::FIELD_ID),
                'name' => Request::input(UserRole::FIELD_NAME),
            ],
        ]);
    }

    public function create()
    {
        $permissions = $this->getAllPermissions();

        return Inertia::render("Backoffice/Roles/Create", compact(
            "permissions",
        ));
    }

    public function store(UserRoleCreateRequest $request)
    {
        $attributes = $request->validated();

        $role = Role::create($attributes);

        $role->syncPermissions($attributes["permissions"]);

        return redirect(route("backoffice.roles.index"))->with("success", "role_created");
    }

    public function show(Role $role)
    {
        $role = new UserRoleResource($role);

        return Inertia::render("Backoffice/Roles/Show", compact(
            "role",
        ));
    }

    public function edit(Role $role)
    {
        $role = new UserRoleResource($role);
        $permissions = $this->getAllPermissions();

        return Inertia::render("Backoffice/Roles/Edit", compact(
            "role",
            "permissions",
        ));
    }

    public function update(UserRoleUpdateRequest $request, Role $role)
    {
        $attributes = $request->validated();

        $role->update($attributes);
        $role->syncPermissions($attributes["permissions"]);

        return redirect(route("backoffice.roles.index"))->with("success", "role_updated");
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return back()->with("success", "role_deleted");;
    }

    #endregion

    #region PRIVATE METHODS

    private function getAllPermissions()
    {
        return new UserPermissionCollection(UserPermission::All());
    }

    #endregion
}
