<?php

namespace App\Http\Controllers\Backend\Frontoffice;

#region USE

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
        $this->authorize('view', FooterLink::class);

        $columns = FooterLinkTemplate::COLUMNS;

        $template = Auth::user()->{ User::ATTRIBUTE_TEMPLATES } ? Auth::user()->{ User::ATTRIBUTE_TEMPLATES }->{ Template::FIELD_FOOTER_LINKS } : FooterLinkTemplate::DEFAULT_TEMPLATE;

        $collection = FooterLink::query()
            ->search($template)
            ->sort($template);

        if (array_key_exists('current', $template) && $template['current'] != null)
        {
            $template['list'][$template['current']] = $collection->pluck($template['current'])->toArray();
        }

        $footerLinks = new FooterLinkCollection($collection->paginate(10));

        return Inertia::render('Backend/FooterLinks/Index', compact(
            'columns',
            'template',
            'footerLinks',
        ));
    }

    public function create()
    {
        $this->authorize('create', FooterLink::class);

        return Inertia::render('Backend/FooterLinks/Create');
    }

    public function store(FooterLinkCreateRequest $request)
    {
        $this->authorize('create', FooterLink::class);

        $attributes = $request->validated();

        FooterLink::create($attributes);

        return redirect(route('admin.footer_links.index'));
    }

    public function show(FooterLink $footerLink)
    {
        $this->authorize('view', FooterLink::class);

        return Inertia::render('Backend/FooterLinks/Show', compact(
            'footerLink',
        ));
    }

    public function edit(FooterLink $footerLink)
    {
        $this->authorize('update', FooterLink::class);

        return Inertia::render('Backend/FooterLinks/Edit', compact(
            'footerLink'
        ));
    }

    public function update(FooterLinkUpdateRequest $request, FooterLink $footerLink)
    {
        $this->authorize('update', FooterLink::class);

        $attributes = $request->validated();

        $footerLink->update($attributes);

        return redirect(route('admin.footer_links.index'));
    }

    public function destroy(FooterLink $footerLink)
    {
        $this->authorize('delete', FooterLink::class);

        $footerLink->delete();

        return back();
    }

    #endregion
}
