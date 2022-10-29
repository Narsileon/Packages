<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backoffice\Questions\FaqCreateRequest;
use App\Http\Requests\Backoffice\Questions\FaqUpdateRequest;
use App\Models\Web\Faq;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class FaqController extends Controller
{
    public function index()
    {
        return Inertia::render('Backoffice/Questions/Index', [
            'questions' => Faq::All()->query()
                ->filter(request(['id', 'question']))
                ->sort()
                ->paginate(),
            'filters' => [
                'id' => Request::input(Faq::FIELD_ID),
                'question' => Request::input(Faq::FIELD_QUESTION),
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Backoffice/Questions/Create');
    }

    public function store(FaqCreateRequest $request)
    {
        $attributes = $request->validated();

        Faq::create($attributes);

        return redirect(route('backoffice.questions.index'));
    }

    public function edit(Faq $faq)
    {
        return Inertia::render('Backoffice/Questions/Edit', compact(
            'faq'
        ));
    }

    public function update(FaqUpdateRequest $request, Faq $faq)
    {
        $attributes = $request->validated();

        $faq->update($attributes);

        return redirect(route('backoffice.questions.index'));
    }

    public function destroy(Faq $faq)
    {
        $faq->delete();

        return back();
    }
}
