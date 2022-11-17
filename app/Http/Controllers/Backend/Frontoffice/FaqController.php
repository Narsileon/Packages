<?php

namespace App\Http\Controllers\Backend\Frontoffice;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Frontoffice\FaqCreateRequest;
use App\Http\Requests\Backend\Frontoffice\FaqUpdateRequest;
use App\Http\Resources\Backend\Frontoffice\FaqCollection;
use App\Models\Frontend\Faq;
use App\Services\FaqService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class FaqController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $user = Auth::user();

        $templates = FaqService::getDefaultTemplate();

        $faqs = new FaqCollection(Faq::query()
            ->search(request('search'))
            ->newSort($templates[Tables::SORTING][0])
            ->paginate(5));

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backend/Faqs/Index', compact(
            'templates',
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
