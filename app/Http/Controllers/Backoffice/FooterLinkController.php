<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backoffice\Links\FooterLinkCreateRequest;
use App\Http\Requests\Backoffice\Links\FooterLinkUpdateRequest;
use App\Http\Resources\Backoffice\Links\FooterLinkCollection;
use App\Models\Web\FooterLink;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class FooterLinkController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $footerLinks = new FooterLinkCollection(FooterLink::query()
            ->search(request('search'))
            ->sort()
            ->paginate());

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backoffice/FooterLinks/Index', compact(
            'footerLinks',
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

    public function show(FooterLink $footerLink)
    {
        return Inertia::render('Backoffice/FooterLinks/Show', compact(
            'footerLink',
        ));
    }

    public function edit(FooterLink $footerLink)
    {
        return Inertia::render('Backoffice/FooterLinks/Edit', compact(
            'footerLink'
        ));
    }

    public function update(FooterLinkUpdateRequest $request, FooterLink $footerLink)
    {
        $attributes = $request->validated();

        $footerLink->update($attributes);

        return redirect(route('backoffice.footer_links.index'));
    }

    public function destroy(FooterLink $footerLink)
    {
        $footerLink->delete();

        return back();
    }

    #endregion
}
