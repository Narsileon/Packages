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
            "roles" => new UserRoleCollection(Role::query()
                ->when(Request::input("search"), function ($query, $search) {
                    $query->where("name", "like", "%{$search}%");
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
        $permissions = new UserPermissionCollection(UserPermission::All());

        return Inertia::render("Backoffice/Roles/Create", compact(
            "permissions",
        ));
    }

    public function store(UserRoleCreateRequest $request)
    {
        $attributes = $request->validated();

        Role::create($attributes);

        return redirect(route("backoffice.roles.index"));
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

        $permissions = new UserPermissionCollection(UserPermission::All());

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

        return redirect(route("backoffice.roles.index"));
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return back();
    }

    #endregion
}
