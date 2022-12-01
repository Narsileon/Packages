<?php

namespace App\Http\Controllers\Backend\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Backoffice\OrderCreateRequest;
use App\Http\Requests\Backend\Backoffice\OrderUpdateRequest;
use App\Http\Resources\Backend\Backoffice\OrderCollection;
use App\Models\Backend\Order;
use App\Models\UserTemplates;
use App\Models\Frontend\Faq;
use App\Services\TemplateService;
use App\Templates\Tables\OrderTemplate;
use Inertia\Inertia;

#endregion

class OrderController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $this->authorize('view', Order::class);

        $columns = OrderTemplate::COLUMNS;
        $template = TemplateService::get(UserTemplates::FIELD_TEMPLATE_ORDERS, UserTemplates::TYPE_CUSTOM, OrderTemplate::DEFAULT_TEMPLATE);

        $collection = Order::query()
            ->search($template)
            ->sort($template);

        if (array_key_exists('current', $template) && $template['current'] != null)
        {
            $template['list'][$template['current']] = $collection->pluck($template['current'])->toArray();
        }

        $orders = new OrderCollection($collection->paginate(10));

        return Inertia::render('Backend/Backoffice/Orders/Index', compact(
            'columns',
            'template',
            'orders',
        ));
    }

    public function create()
    {
        $this->authorize('create', Order::class);

        return Inertia::render('Backend/Backoffice/Orders/Create');
    }

    public function store(OrderCreateRequest $request)
    {
        $this->authorize('create', Order::class);

        $attributes = $request->validated();

        Faq::create($attributes);

        return redirect(route('admin.orders.index'))
            ->with('success', 'order_created');
    }

    public function show(Order $order)
    {
        $this->authorize('view', Order::class);

        return Inertia::render('Backend/Backoffice/Orders/Show', compact(
            'order',
        ));
    }

    public function edit(Order $order)
    {
        $this->authorize('update', Order::class);

        return Inertia::render('Backend/Backoffice/Orders/Edit', compact(
            'order'
        ));
    }

    public function update(OrderUpdateRequest $request, Order $order)
    {
        $this->authorize('update', Order::class);

        $attributes = $request->validated();

        $order->update($attributes);

        return redirect(route('admin.orders.index'))
            ->with('success', 'order_updated');
    }

    public function destroy(Order $order)
    {
        $this->authorize('delete', Order::class);

        $order->delete();

        return back()
            ->with('success', 'order_deleted');
    }

    #endregion
}
