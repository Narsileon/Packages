<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backoffice\Faqs\FooterLinkCreateRequest;
use App\Http\Requests\Backoffice\Faqs\FooterLinkUpdateRequest;
use App\Models\Web\FooterLink;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class FooterLinkController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $links = FooterLink::latest()
            ->search(request('search'))
            ->sort()
            ->get();

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backoffice/FooterLinks/Index', compact(
            'links',
            'filters',
        ));
    }

    public function create()
    {
        return Inertia::render('Backoffice/FooterLinks/Create');
    }

    public function store(FooterLinkCreateRequest $request)
    {
        $attributes = $request->validated();

        FooterLink::create($attributes);

        return redirect(route('backoffice.footer_links.index'));
    }

    public function show(FooterLink $footer_link)
    {
        return Inertia::render('Backoffice/FooterLinks/Show', compact(
            'footer_link',
        ));
    }

    public function edit(FooterLink $footer_link)
    {
        return Inertia::render('Backoffice/FooterLinks/Edit', compact(
            'footer_link'
        ));
    }

    public function update(FooterLinkUpdateRequest $request, FooterLink $footer_link)
    {
        $attributes = $request->validated();

        $footer_link->update($attributes);

        return redirect(route('backoffice.footer_links.index'));
    }

    public function destroy(FooterLink $footer_link)
    {
        $footer_link->delete();

        return back();
    }

    #endregion
}
