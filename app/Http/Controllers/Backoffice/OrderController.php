<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backoffice\Faqs\FaqCreateRequest;
use App\Http\Requests\Backoffice\Faqs\FaqUpdateRequest;
use App\Models\Web\Faq;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class OrderController extends Controller
{
    public function index()
    {
        return Inertia::render('Backoffice/Faqs/Index', [
            'faqs' => Faq::latest()
                ->filter(request('search'))
                ->sort()
                ->paginate(),
            'filters' => [
                'search' => Request::input('search'),
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Backoffice/Faqs/Create');
    }

    public function store(FaqCreateRequest $request)
    {
        $attributes = $request->validated();

        Faq::create($attributes);

        return redirect(route('backoffice.faqs.index'));
    }

    public function show(Faq $faq)
    {
        return Inertia::render('Backoffice/Faqs/Show', compact(
            'faq',
        ));
    }

    public function edit(Faq $faq)
    {
        return Inertia::render('Backoffice/Faqs/Edit', compact(
            'faq'
        ));
    }

    public function update(FaqUpdateRequest $request, Faq $faq)
    {
        $attributes = $request->validated();

        $faq->update($attributes);

        return redirect(route('backoffice.faqs.index'));
    }

    public function destroy(Faq $faq)
    {
        $faq->delete();

        return back();
    }
}
