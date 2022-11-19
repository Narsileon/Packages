<?php

namespace App\Http\Controllers\Backend\Frontoffice;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Frontoffice\FooterLinkCreateRequest;
use App\Http\Requests\Backend\Frontoffice\FooterLinkUpdateRequest;
use App\Http\Resources\Backend\Frontoffice\FooterLinkCollection;
use App\Models\Backend\Template;
use App\Models\Frontend\FooterLink;
use App\Models\User;
use App\Templates\FooterLinkTemplate;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class FooterLinkController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $header = FooterLinkTemplate::COLUMNS;

        $user = Auth::user();

        $template = $user->{ User::ATTRIBUTE_TEMPLATES } ? $user->{ User::ATTRIBUTE_TEMPLATES }->{ Template::FIELD_FOOTER_LINKS } : FooterLinkTemplate::DEFAULT_TEMPLATE;

        $footerLinks = new FooterLinkCollection(FooterLink::query()
            ->search(array_key_exists('globalSearch', $template) ? $template['globalSearch'] : '')
            ->newSort($template[Tables::PROPERTY_SORTING])
            ->paginate(5));

        return Inertia::render('Backend/FooterLinks/Index', compact(
            'header',
            'template',
            'footerLinks',
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
