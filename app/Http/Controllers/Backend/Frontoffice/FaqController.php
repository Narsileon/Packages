<?php

namespace App\Http\Controllers\Backend\Frontoffice;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Frontoffice\FaqCreateRequest;
use App\Http\Requests\Backend\Frontoffice\FaqUpdateRequest;
use App\Http\Resources\Backend\Frontoffice\FaqCollection;
use App\Models\Backend\Template;
use App\Models\Frontend\Faq;
use App\Models\User;
use App\Templates\FaqTemplate;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class FaqController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $this->authorize('view', Faq::class);

        $columns = FaqTemplate::COLUMNS;

        $user = Auth::user();

        $template = $user->{ User::ATTRIBUTE_TEMPLATES } ? $user->{ User::ATTRIBUTE_TEMPLATES }->{ Template::FIELD_FAQS } : FaqTemplate::DEFAULT_TEMPLATE;

        $faqs = new FaqCollection(Faq::query()
            ->search($template)
            ->sort($template)
            ->paginate(10));

        return Inertia::render('Backend/Faqs/Index', compact(
            'columns',
            'template',
            'faqs',
        ));
    }

    public function create()
    {
        $this->authorize('create', Faq::class);

        return Inertia::render('Backend/Faqs/Create');
    }

    public function store(FaqCreateRequest $request)
    {
        $this->authorize('create', Faq::class);

        $attributes = $request->validated();

        Faq::create($attributes);

        return redirect(route('admin.faqs.index'));
    }

    public function show(Faq $faq)
    {
        $this->authorize('view', Faq::class);

        return Inertia::render('Backend/Faqs/Show', compact(
            'faq',
        ));
    }

    public function edit(Faq $faq)
    {
        $this->authorize('update', Faq::class);

        return Inertia::render('Backend/Faqs/Edit', compact(
            'faq'
        ));
    }

    public function update(FaqUpdateRequest $request, Faq $faq)
    {
        $this->authorize('update', Faq::class);

        $attributes = $request->validated();

        $faq->update($attributes);

        return redirect(route('admin.faqs.index'));
    }

    public function destroy(Faq $faq)
    {
        $this->authorize('delete', Faq::class);

        $faq->delete();

        return back();
    }

    #endregion
}
