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
use App\Models\User;
use App\Models\UserPermission;
use App\Models\UserRole;
use App\Models\UserTemplate;
use App\Services\TemplateService;
use Illuminate\Support\Arr;
use Inertia\Inertia;

#endregion

class UserController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $this->authorize('view', User::class);

        $tableSettings = TemplateService::get(Tables::TABLE_USERS, TABLES::CATEGORY_CUSTOM);

        $collection = User::query()
            ->search($tableSettings->{ UserTemplate::FIELD_TEMPLATE})
            ->sort($tableSettings->{ UserTemplate::FIELD_TEMPLATE});

        $tableSettings = TemplateService::applyTableSettings($collection, $tableSettings);

        $collection = new UserCollection($collection->paginate(10));

        return Inertia::render('Backend/Management/Users/Index', compact(
            'collection',
            'tableSettings',
        ));
    }

    public function create()
    {
        $this->authorize('create', User::class);

        $roles = $this->getAllRoles();
        $permissions = $this->getAllPermissions();

        return Inertia::render('Backend/Management/Users/Create', compact(
            'roles',
            'permissions',
        ));
    }

    public function store(UserCreateRequest $request)
    {
        $this->authorize('create', User::class);

        $attributes = $request->validated();

        $user = User::create($attributes);

        $user->syncPermissions($request->get('permissions', []));

        return redirect(route('admin.users.index'))
            ->with('success', 'user_created');
    }

    public function show(User $user)
    {
        $this->authorize('view', User::class);

        $user = new UserResource($user);

        return Inertia::render('Backend/Management/Users/Show', compact(
            'user',
        ));
    }

    public function edit(User $user)
    {
        $this->authorize('update', User::class);

        $user = new UserResource($user);

        $roles = $this->getAllRoles();
        $permissions = $this->getAllPermissions();

        return Inertia::render('Backend/Management/Users/Edit', compact(
            'user',
            'roles',
            'permissions',
        ));
    }

    public function update(UserUpdateRequest $request, User $user)
    {
        $this->authorize('update', User::class);

        $attributes = $request->validated();

        $user->update($attributes);

        $user->syncRoles(Arr::pluck($attributes['roles'], 'name'));
        $user->syncPermissions(Arr::pluck($attributes['permissions'], 'name'));

        return redirect(route('admin.users.index'))
            ->with('success', 'user_updated');
    }

    public function destroy(User $user)
    {
        $this->authorize('delete', User::class);

        $user->delete();

        return back()
            ->with('success', 'user_deleted');;
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
