<?php

namespace App\Http\Controllers\Backend\Frontoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Frontoffice\FooterLinkCreateRequest;
use App\Http\Requests\Backend\Frontoffice\FooterLinkUpdateRequest;
use App\Http\Resources\Backend\Links\FooterLinkCollection;
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

        return Inertia::render('Backend/FooterLinks/Index', compact(
            'footerLinks',
            'filters',
        ));
    }

    public function create()
    {
        return Inertia::render('Backend/FooterLinks/Create');
    }

    public function store(FooterLinkCreateRequest $request)
    {
        $attributes = $request->validated();

        FooterLink::create($attributes);

        return redirect(route('admin.footer_links.index'));
    }

    public function show(FooterLink $footerLink)
    {
        return Inertia::render('Backend/FooterLinks/Show', compact(
            'footerLink',
        ));
    }

    public function edit(FooterLink $footerLink)
    {
        return Inertia::render('Backend/FooterLinks/Edit', compact(
            'footerLink'
        ));
    }

    public function update(FooterLinkUpdateRequest $request, FooterLink $footerLink)
    {
        $attributes = $request->validated();

        $footerLink->update($attributes);

        return redirect(route('admin.footer_links.index'));
    }

    public function destroy(FooterLink $footerLink)
    {
        $footerLink->delete();

        return back();
    }

    #endregion
}
