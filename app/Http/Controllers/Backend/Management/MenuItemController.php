<?php

namespace App\Http\Controllers\Backend\Management;

#region USE

use App\Acl\Permissions;
use App\Acl\Roles;
use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Management\MenuItemCreateRequest;
use App\Http\Requests\Backend\Management\MenuItemUpdateRequest;
use App\Http\Resources\Backend\Management\MenuItemCollection;
use App\Models\MenuItem;
use App\Services\TemplateService;
use Inertia\Inertia;

#endregion

class MenuItemController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $this->authorize('view', MenuItem::class);

        $tableSettings = TemplateService::get(Tables::TABLE_MENU_ITEMS);

        $collection = MenuItem::query()
            ->search($tableSettings)
            ->sort($tableSettings);

        $tableSettings = TemplateService::applyTableSettings($collection, $tableSettings);

        $collection = new MenuItemCollection($collection->paginate(10));

        return Inertia::render('Backend/Management/MenuItems/Index', compact(
            'collection',
            'tableSettings',
        ));
    }

    public function create()
    {
        $this->authorize('create', MenuItem::class);

        $roles = Roles::getAll();
        $permissions = Permissions::getAll();

        return Inertia::render('Backend/Management/MenuItems/Create', compact(
            'roles',
            'permissions',
        ));
    }

    public function store(MenuItemCreateRequest $request)
    {
        $this->authorize('create', HeaderLink::class);

        $attributes = $request->validated();

        MenuItem::create($attributes);

        return redirect(route('admin.menus.index'))
            ->with('success', 'menu_item_created');
    }

    public function show(MenuItem $menuItem)
    {
        $this->authorize('view', HeaderLink::class);

        return Inertia::render('Backend/Management/MenuItems/Show', compact(
            'menuItem',
        ));
    }

    public function edit(MenuItem $menuItem)
    {
        $this->authorize('update', MenuItem::class);

        $roles = Roles::getAll();
        $permissions = Permissions::getAll();

        return Inertia::render('Backend/Management/MenuItems/Edit', compact(
            'menuItem',
            'roles',
            'permissions',
        ));
    }

    public function update(MenuItemUpdateRequest $request, MenuItem $menuItem)
    {
        $this->authorize('update', MenuItem::class);

        $attributes = $request->validated();

        $menuItem->update($attributes);

        return back()
            ->with('success', 'menu_item_updated');
    }

    public function destroy(MenuItem $menuItem)
    {
        $this->authorize('delete', MenuItem::class);

        $menuItem->delete();

        return back()
            ->with('success', 'menu_item_deleted');
    }

    #endregion
}
