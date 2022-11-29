<?php

namespace App\Http\Controllers\Backend\Frontoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Frontoffice\HeaderLinkCreateRequest;
use App\Http\Requests\Backend\Frontoffice\HeaderLinkUpdateRequest;
use App\Http\Resources\Backend\Frontoffice\HeaderLinkCollection;
use App\Models\Backend\UserSettings;
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
        $this->authorize('view', HeaderLink::class);

        $columns = HeaderLinkTemplate::COLUMNS;

        $template = Auth::user()->{ User::ATTRIBUTE_SETTINGS } ? Auth::user()->{ User::ATTRIBUTE_SETTINGS }->{ UserSettings::FIELD_FOOTER_LINKS } : HeaderLinkTemplate::DEFAULT_TEMPLATE;

        $collection = HeaderLink::query()
            ->search($template)
            ->sort($template);

        if (array_key_exists('current', $template) && $template['current'] != null)
        {
            $template['list'][$template['current']] = $collection->pluck($template['current'])->toArray();
        }

        $headerLinks = new HeaderLinkCollection($collection->paginate(10));

        return Inertia::render('Backend/Frontoffice/HeaderLinks/Index', compact(
            'columns',
            'template',
            'headerLinks',
        ));
    }

    public function create()
    {
        $this->authorize('create', HeaderLink::class);

        return Inertia::render('Backend/Frontoffice/HeaderLinks/Create');
    }

    public function store(HeaderLinkCreateRequest $request)
    {
        $this->authorize('create', HeaderLink::class);

        $attributes = $request->validated();

        HeaderLink::create($attributes);

        return redirect(route('admin.header_links.index'));
    }

    public function show(HeaderLink $headerLink)
    {
        $this->authorize('view', HeaderLink::class);

        return Inertia::render('Backend/Frontoffice/HeaderLinks/Show', compact(
            'headerLink',
        ));
    }

    public function edit(HeaderLink $headerLink)
    {
        $this->authorize('update', HeaderLink::class);

        return Inertia::render('Backend/Frontoffice/HeaderLinks/Edit', compact(
            'headerLink'
        ));
    }

    public function update(HeaderLinkUpdateRequest $request, HeaderLink $headerLink)
    {
        $this->authorize('update', HeaderLink::class);

        $attributes = $request->validated();

        $headerLink->update($attributes);

        return redirect(route('admin.header_links.index'));
    }

    public function destroy(HeaderLink $headerLink)
    {
        $this->authorize('delete', HeaderLink::class);

        $headerLink->delete();

        return back();
    }

    #endregion
}
