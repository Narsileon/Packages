<?php

namespace App\Http\Controllers\Backend\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Backoffice\OrderCreateRequest;
use App\Http\Requests\Backend\Backoffice\OrderUpdateRequest;
use App\Http\Resources\Backend\Backoffice\OrderCollection;
use App\Models\Backend\Order;
use App\Models\Backend\Template;
use App\Models\Frontend\Faq;
use App\Models\User;
use App\Templates\OrderTemplate;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class OrderController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $this->authorize('view', Order::class);

        $columns = OrderTemplate::COLUMNS;

        $user = Auth::user();

        $template = $user->{ User::ATTRIBUTE_TEMPLATES } ? $user->{ User::ATTRIBUTE_TEMPLATES }->{ Template::FIELD_ORDERS } : OrderTemplate::DEFAULT_TEMPLATE;

        $orders = new OrderCollection(Order::query()
            ->search($template)
            ->sort($template)
            ->paginate(5));

        return Inertia::render('Backend/Orders/Index', compact(
            'columns',
            'template',
            'orders',
        ));
    }

    public function create()
    {
        $this->authorize('create', Order::class);

        return Inertia::render('Backend/Orders/Create');
    }

    public function store(OrderCreateRequest $request)
    {
        $this->authorize('create', Order::class);

        $attributes = $request->validated();

        Faq::create($attributes);

        return redirect(route('admin.orders.index'));
    }

    public function show(Order $order)
    {
        $this->authorize('view', Order::class);

        return Inertia::render('Backend/Orders/Show', compact(
            'order',
        ));
    }

    public function edit(Order $order)
    {
        $this->authorize('update', Order::class);

        return Inertia::render('Backend/Orders/Edit', compact(
            'order'
        ));
    }

    public function update(OrderUpdateRequest $request, Order $order)
    {
        $this->authorize('update', Order::class);

        $attributes = $request->validated();

        $order->update($attributes);

        return redirect(route('admin.orders.index'));
    }

    public function destroy(Order $order)
    {
        $this->authorize('delete', Order::class);

        $order->delete();

        return back();
    }

    #endregion
}
