<?php

namespace App\Http\Controllers\Backend\Backoffice;

#region USE

use App\Constants\Tables;
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
    public function index()
    {
        $header = OrderTemplate::COLUMNS;

        $user = Auth::user();

        $template = $user->{ User::ATTRIBUTE_TEMPLATES } ? $user->{ User::ATTRIBUTE_TEMPLATES }->{ Template::FIELD_ORDERS } : OrderTemplate::DEFAULT_TEMPLATE;

        $orders = new OrderCollection(Order::query()
            ->search(array_key_exists(Tables::PROPERTY_GLOBAL_FILTER, $template) ? $template[Tables::PROPERTY_GLOBAL_FILTER] : '')
            ->newSort($template[Tables::PROPERTY_SORTING])
            ->paginate(5));

        return Inertia::render('Backend/Orders/Index', compact(
            'header',
            'template',
            'orders',
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
