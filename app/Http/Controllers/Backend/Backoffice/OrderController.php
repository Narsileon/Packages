<?php

namespace App\Http\Controllers\Backend\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Backoffice\OrderCreateRequest;
use App\Http\Requests\Backend\Backoffice\OrderUpdateRequest;
use App\Http\Resources\Backend\Backoffice\OrderCollection;
use App\Models\Backend\Order;
use App\Models\Frontend\Faq;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class OrderController extends Controller
{
    public function index()
    {
        $orders = new OrderCollection(Order::query()
            ->search(request('search'))
            ->sort()
            ->paginate());

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backend/Orders/Index', compact(
            'orders',
            'filters',
        ));
    }

    public function create()
    {
        return Inertia::render('Backend/Orders/Create');
    }

    public function store(OrderCreateRequest $request)
    {
        $attributes = $request->validated();

        Faq::create($attributes);

        return redirect(route('admin.orders.index'));
    }

    public function show(Order $order)
    {
        return Inertia::render('Backend/Orders/Show', compact(
            'order',
        ));
    }

    public function edit(Order $order)
    {
        return Inertia::render('Backend/Orders/Edit', compact(
            'order'
        ));
    }

    public function update(OrderUpdateRequest $request, Order $order)
    {
        $attributes = $request->validated();

        $order->update($attributes);

        return redirect(route('admin.orders.index'));
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return back();
    }
}
