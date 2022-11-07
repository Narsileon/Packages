<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backoffice\Faqs\FaqCreateRequest;
use App\Http\Requests\Backoffice\Faqs\FaqUpdateRequest;
use App\Models\Backoffice\Order;
use App\Models\Web\Faq;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::latest()
            ->search(request('search'))
            ->sort()
            ->paginate();

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backoffice/Orders/Index', compact(
            'orders',
            'filters',
        ));
    }

    public function create()
    {
        return Inertia::render('Backoffice/Orders/Create');
    }

    public function store(FaqCreateRequest $request)
    {
        $attributes = $request->validated();

        Faq::create($attributes);

        return redirect(route('backoffice.orders.index'));
    }

    public function show(Order $order)
    {
        return Inertia::render('Backoffice/Orders/Show', compact(
            'order',
        ));
    }

    public function edit(Order $order)
    {
        return Inertia::render('Backoffice/Orders/Edit', compact(
            'order'
        ));
    }

    public function update(FaqUpdateRequest $request, Order $order)
    {
        $attributes = $request->validated();

        $order->update($attributes);

        return redirect(route('backoffice.orders.index'));
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return back();
    }
}
