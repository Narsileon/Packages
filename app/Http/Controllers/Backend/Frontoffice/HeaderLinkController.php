<?php

namespace App\Http\Controllers\Backend\Frontoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Links\HeaderLinkCreateRequest;
use App\Http\Requests\Backend\Links\HeaderLinkUpdateRequest;
use App\Http\Resources\Backend\Links\HeaderLinkCollection;
use App\Models\Web\HeaderLink;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class HeaderLinkController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $headerLinks = new HeaderLinkCollection(HeaderLink::query()
            ->search(request('search'))
            ->sort()
            ->paginate());

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backend/HeaderLinks/Index', compact(
            'headerLinks',
            'filters',
        ));
    }

    public function create()
    {
        return Inertia::render('Backend/HeaderLinks/Create');
    }

    public function store(HeaderLinkCreateRequest $request)
    {
        $attributes = $request->validated();

        HeaderLink::create($attributes);

        return redirect(route('admin.header_links.index'));
    }

    public function show(HeaderLink $headerLink)
    {
        return Inertia::render('Backend/HeaderLinks/Show', compact(
            'headerLink',
        ));
    }

    public function edit(HeaderLink $headerLink)
    {
        return Inertia::render('Backend/HeaderLinks/Edit', compact(
            'headerLink'
        ));
    }

    public function update(HeaderLinkUpdateRequest $request, HeaderLink $headerLink)
    {
        $attributes = $request->validated();

        $headerLink->update($attributes);

        return redirect(route('admin.header_links.index'));
    }

    public function destroy(HeaderLink $headerLink)
    {
        $headerLink->delete();

        return back();
    }

    #endregion
}
