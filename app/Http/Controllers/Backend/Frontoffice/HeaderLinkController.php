<?php

namespace App\Http\Controllers\Backend\Frontoffice;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Frontoffice\HeaderLinkCreateRequest;
use App\Http\Requests\Backend\Frontoffice\HeaderLinkUpdateRequest;
use App\Http\Resources\Backend\Frontoffice\HeaderLinkCollection;
use App\Models\Backend\Template;
use App\Models\Frontend\HeaderLink;
use App\Models\User;
use App\Templates\HeaderLinkTemplate;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class HeaderLinkController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $header = HeaderLinkTemplate::COLUMNS;

        $user = Auth::user();

        $template = $user->{ User::ATTRIBUTE_TEMPLATES } ? $user->{ User::ATTRIBUTE_TEMPLATES }->{ Template::FIELD_FOOTER_LINKS } : HeaderLinkTemplate::DEFAULT_TEMPLATE;

        $headerLinks = new HeaderLinkCollection(HeaderLink::query()
            ->search(array_key_exists(Tables::PROPERTY_GLOBAL_FILTER, $template) ? $template[Tables::PROPERTY_GLOBAL_FILTER] : '')
            ->newSort($template[Tables::PROPERTY_SORTING])
            ->paginate(5));

        return Inertia::render('Backend/HeaderLinks/Index', compact(
            'header',
            'template',
            'headerLinks',
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
