<?php

namespace App\Http\Controllers\Backend\Templates;

#region USE

use App\Http\Controllers\Controller;
use App\Models\Backend\Templates\FaqTemplate;
use App\Services\FaqService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

#endregion

class FaqTemplateController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke(Request $request)
    {
        $user = Auth::user();

        if ($user->faqTemplate)
        {
            $user->faqTemplate->update();
        }

        else
        {
            FaqTemplate::create([
                FaqTemplate::FIELD_USER_ID => $user->id,
                FaqTemplate::FIELD_ORDER => FaqService::getDefaultOrder(),
                FaqTemplate::FIELD_SORTING => FaqService::getDefaultSorting(),
            ]);
        }

        return redirect(route('admin.faqs.index'));
    }

    #endregion
}
