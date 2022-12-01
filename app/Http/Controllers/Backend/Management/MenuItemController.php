<?php

namespace App\Http\Controllers\Backend\Management;

#region USE

use App\Constants\IconConstants;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Management\MenuItemCreateRequest;
use App\Http\Requests\Backend\Management\MenuItemUpdateRequest;
use App\Http\Resources\Backend\Management\MenuItemCollection;
use App\Models\MenuItem;
use App\Models\UserTemplates;
use App\Services\TemplateService;
use App\Templates\Tables\MenuItemTemplate;
use Inertia\Inertia;

#endregion

class MenuItemController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $this->authorize('view', MenuItem::class);

        $columns = MenuItemTemplate::COLUMNS;
        $template = TemplateService::get(UserTemplates::FIELD_TEMPLATE_MENU_ITEMS, UserTemplates::TYPE_CUSTOM, MenuItemTemplate::DEFAULT_TEMPLATE);

        $collection = MenuItem::query()
            ->search($template)
            ->sort($template);

        if (array_key_exists('current', $template) && $template['current'] != null)
        {
            $template['list'][$template['current']] = $collection->pluck($template['current'])->toArray();
        }

        $menuItems = new MenuItemCollection($collection->paginate(10));

        return Inertia::render('Backend/Management/MenuItems/Index', compact(
            'columns',
            'template',
            'menuItems',
        ));
    }

    public function create()
    {
        $this->authorize('create', MenuItem::class);

        $icons = IconConstants::NAMES;

        return Inertia::render('Backend/Management/MenuItems/Create', compact(
            'icons',
        ));
    }

    public function store(MenuItemCreateRequest $request)
    {
        $this->authorize('create', HeaderLink::class);

        $attributes = $request->validated();

        MenuItem::create($attributes);

        return redirect(route('admin.user_menus.index'))
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

        $icons = IconConstants::NAMES;

        return Inertia::render('Backend/Management/MenuItems/Edit', compact(
            'menuItem',
            'icons',
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
