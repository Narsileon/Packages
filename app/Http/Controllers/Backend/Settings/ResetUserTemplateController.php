<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Models\UserTemplate;
use App\Services\TemplateService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

#endregion

class ResetUserTemplateController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke(Request $request)
    {
        $template = [];

        if ($request->{ UserTemplate::FIELD_CATEGORY } == Tables::CATEGORY_DEFAULT)
        {
            $template = TemplateService::getDefaultTemplate($request->{ UserTemplate::FIELD_TYPE });
        }

        else if ($request->{ UserTemplate::FIELD_CATEGORY } == Tables::CATEGORY_CUSTOM)
        {
            $template = Auth::user()->templates
                ->where(UserTemplate::FIELD_TYPE, '=', $request->{ UserTemplate::FIELD_TYPE })
                ->where(UserTemplate::FIELD_CATEGORY, '=', Tables::CATEGORY_DEFAULT)
                ->first()->{ UserTemplate::FIELD_TEMPLATE };
        }

        UserTemplate::find($request->{ UserTemplate::FIELD_ID })->update([
            UserTemplate::FIELD_TEMPLATE => $template,
        ]);

        return back();
    }

    #endregion
}
