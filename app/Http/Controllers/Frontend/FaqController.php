<?php

namespace App\Http\Controllers\Frontend;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Resources\Web\Faqs\FaqCollection;
use App\Models\Web\Faq;
use Inertia\Inertia;

#endregion

class FaqController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke()
    {
        $faqs = new FaqCollection(Faq::all());

        return Inertia::render('Web/FAQ/Index', compact(
            'faqs'
        ));
    }

    #endregion
}
