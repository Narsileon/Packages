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

class FooterLinkController extends Controller
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

        return Inertia::render('Backoffice/FooterLinks/Index', compact(
            'faqs',
            'filters',
        ));
    }

    public function create()
    {
        return Inertia::render('Backoffice/FooterLinks/Create');
    }

    public function store(FaqCreateRequest $request)
    {
        $attributes = $request->validated();

        Faq::create($attributes);

        return redirect(route('backoffice.footer_links.index'));
    }

    public function show(Faq $faq)
    {
        return Inertia::render('Backoffice/FooterLinks/Show', compact(
            'faq',
        ));
    }

    public function edit(Faq $faq)
    {
        return Inertia::render('Backoffice/FooterLinks/Edit', compact(
            'faq'
        ));
    }

    public function update(FaqUpdateRequest $request, Faq $faq)
    {
        $attributes = $request->validated();

        $faq->update($attributes);

        return redirect(route('backoffice.footer_links.index'));
    }

    public function destroy(Faq $faq)
    {
        $faq->delete();

        return back();
    }

    #endregion
}
