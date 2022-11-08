<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backoffice\Faqs\HeaderLinkCreateRequest;
use App\Http\Requests\Backoffice\Faqs\HeaderLinkUpdateRequest;
use App\Models\Web\HeaderLink;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class HeaderLinkController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $header_links = HeaderLink::latest()
            ->search(request('search'))
            ->sort()
            ->paginate();

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backoffice/HeaderLinks/Index', compact(
            'header_links',
            'filters',
        ));
    }

    public function create()
    {
        return Inertia::render('Backoffice/HeaderLinks/Create');
    }

    public function store(HeaderLinkCreateRequest $request)
    {
        $attributes = $request->validated();

        HeaderLink::create($attributes);

        return redirect(route('backoffice.header_links.index'));
    }

    public function show(HeaderLink $headerLink)
    {
        return Inertia::render('Backoffice/HeaderLinks/Show', compact(
            'headerLink',
        ));
    }

    public function edit(HeaderLink $headerLink)
    {
        return Inertia::render('Backoffice/HeaderLinks/Edit', compact(
            'headerLink'
        ));
    }

    public function update(HeaderLinkUpdateRequest $request, HeaderLink $headerLink)
    {
        $attributes = $request->validated();

        $headerLink->update($attributes);

        return redirect(route('backoffice.header_links.index'));
    }

    public function destroy(HeaderLink $headerLink)
    {
        $headerLink->delete();

        return back();
    }

    #endregion
}
