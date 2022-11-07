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

class HeaderLinkController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $faqs = Faq::latest()
            ->search(request('search'))
            ->sort();

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backoffice/HeaderLinks/Index', compact(
            'faqs',
            'filters',
        ));
    }

    public function create()
    {
        return Inertia::render('Backoffice/HeaderLinks/Create');
    }

    public function store(FaqCreateRequest $request)
    {
        $attributes = $request->validated();

        Faq::create($attributes);

        return redirect(route('backoffice.header_links.index'));
    }

    public function show(Faq $faq)
    {
        return Inertia::render('Backoffice/HeaderLinks/Show', compact(
            'faq',
        ));
    }

    public function edit(Faq $faq)
    {
        return Inertia::render('Backoffice/HeaderLinks/Edit', compact(
            'faq'
        ));
    }

    public function update(FaqUpdateRequest $request, Faq $faq)
    {
        $attributes = $request->validated();

        $faq->update($attributes);

        return redirect(route('backoffice.header_links.index'));
    }

    public function destroy(Faq $faq)
    {
        $faq->delete();

        return back();
    }

    #endregion
}
