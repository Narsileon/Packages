<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Models\Backend\Template;
use App\Models\User;
use App\Services\FaqService;
use App\Services\LanguageService;
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
            $template = $request[$request->template];

            $template['sorting'] = !array_key_exists('sorting', $template) ? [] : array(
                [
                    'id' => $template['sorting'][0]['id'],
                    'desc' => $template['sorting'][1]['desc'] == 'true' ? true : false,
                ]
            );

            $user->{ User::ATTRIBUTE_TEMPLATES}->update([$request->template => $template]);
        }

        else
        {
            Template::create([
                Template::FIELD_USER_ID => $user->{ User::FIELD_ID },
                Template::FIELD_TEMPLATE_FAQ => FaqService::DEFAULT_TEMPLATE,
                Template::FIELD_TEMPLATE_LANGUAGE => LanguageService::DEFAULT_TEMPLATE,
            ]);
        }

        return redirect(route($request->route));
    }

    #endregion
}
