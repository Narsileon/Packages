<?php

namespace App\Http\Controllers\Frontend;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Resources\Frontend\FaqCollection;
use App\Models\Frontend\Faq;
use Inertia\Inertia;

#endregion

class FaqController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke()
    {
        $faqs = new FaqCollection(Faq::all());

        return Inertia::render('Frontend/FAQ/Index', compact(
            'faqs'
        ));
    }

    #endregion
}
