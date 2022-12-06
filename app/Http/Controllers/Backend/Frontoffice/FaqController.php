<?php

namespace App\Http\Controllers\Backend\Frontoffice;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Frontoffice\FaqCreateRequest;
use App\Http\Requests\Backend\Frontoffice\FaqUpdateRequest;
use App\Http\Resources\Backend\Frontoffice\FaqCollection;
use App\Models\Frontend\Faq;
use App\Services\TemplateService;
use Inertia\Inertia;

#endregion

class FaqController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $this->authorize('view', Faq::class);

        $tableSettings = TemplateService::get(Tables::TABLE_FAQS);

        $collection = Faq::query()
            ->search($tableSettings)
            ->sort($tableSettings);

        $tableSettings = TemplateService::applyTableSettings($collection, $tableSettings);

        $collection = new FaqCollection($collection->paginate(10));

        return Inertia::render('Backend/Frontoffice/Faqs/Index', compact(
            'collection',
            'tableSettings',
        ));
    }

    public function create()
    {
        $this->authorize('create', Faq::class);

        return Inertia::render('Backend/Frontoffice/Faqs/Create');
    }

    public function store(FaqCreateRequest $request)
    {
        $this->authorize('create', Faq::class);

        $attributes = $request->validated();

        Faq::create($attributes);

        return redirect(route('admin.faqs.index'))
            ->with('success', 'faq_created');
    }

    public function show(Faq $faq)
    {
        $this->authorize('view', Faq::class);

        return Inertia::render('Backend/Frontoffice/Faqs/Show', compact(
            'faq',
        ));
    }

    public function edit(Faq $faq)
    {
        $this->authorize('update', Faq::class);

        return Inertia::render('Backend/Frontoffice/Faqs/Edit', compact(
            'faq'
        ));
    }

    public function update(FaqUpdateRequest $request, Faq $faq)
    {
        $this->authorize('update', Faq::class);

        $attributes = $request->validated();

        $faq->update($attributes);

        return redirect(route('admin.faqs.index'))
            ->with('success', 'faq_updated');
    }

    public function destroy(Faq $faq)
    {
        $this->authorize('delete', Faq::class);

        $faq->delete();

        return back()
            ->with('success', 'faq_deleted');
    }

    #endregion
}
