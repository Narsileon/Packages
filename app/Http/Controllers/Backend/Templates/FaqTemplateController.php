<?php

namespace App\Http\Controllers\Backend\Templates;

#region USE

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

#endregion

class FaqTemplateController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke(Request $request)
    {
        return redirect(route('admin.faqs.index'));
    }

    #endregion
}
