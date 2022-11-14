<?php

namespace App\Http\Controllers\Backend\Frontoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Faqs\FaqCreateRequest;
use App\Http\Requests\Backend\Faqs\FaqUpdateRequest;
use App\Http\Resources\Backend\Faqs\FaqCollection;
use App\Models\Web\Faq;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class FaqController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $faqs = new FaqCollection(Faq::query()
            ->search(request('search'))
            ->sort()
            ->paginate());

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backend/Faqs/Index', compact(
            'faqs',
            'filters',
        ));
    }

    public function create()
    {
        return Inertia::render('Backend/Faqs/Create');
    }

    public function store(FaqCreateRequest $request)
    {
        $attributes = $request->validated();

        Faq::create($attributes);

        return redirect(route('admin.faqs.index'));
    }

    public function show(Faq $faq)
    {
        return Inertia::render('Backend/Faqs/Show', compact(
            'faq',
        ));
    }

    public function edit(Faq $faq)
    {
        return Inertia::render('Backend/Faqs/Edit', compact(
            'faq'
        ));
    }

    public function update(FaqUpdateRequest $request, Faq $faq)
    {
        $attributes = $request->validated();

        $faq->update($attributes);

        return redirect(route('admin.faqs.index'));
    }

    public function destroy(Faq $faq)
    {
        $faq->delete();

        return back();
    }

    #endregion
}
