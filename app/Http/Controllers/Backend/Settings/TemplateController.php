<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Models\Backend\Template;
use App\Models\User;
use App\Services\FaqService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

#endregion

class TemplateController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke(Request $request)
    {
        $user = Auth::user();

        if ($user->{ User::ATTRIBUTE_TEMPLATES} )
        {
            $templates = $request[Template::FIELD_TEMPLATE_FAQ];

            $templates['sorting'] = array(
                [
                    'id' => $request[Template::FIELD_TEMPLATE_FAQ]['sorting'][0]['id'],
                    'desc' => $request[Template::FIELD_TEMPLATE_FAQ]['sorting'][1]['desc'],
                ]
            );

            $user->{ User::ATTRIBUTE_TEMPLATES}->update([Template::FIELD_TEMPLATE_FAQ => $templates]);
        }

        else
        {
            Template::create([
                Template::FIELD_USER_ID => $user->{ User::FIELD_ID },
                Template::FIELD_TEMPLATE_FAQ => FaqService::getDefaultTemplate(),
            ]);
        }

        return redirect(route($request->route));
    }

    #endregion
}
