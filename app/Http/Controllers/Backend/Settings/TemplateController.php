<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Models\Backend\Template;
use App\Models\User;
use App\Templates\FaqTemplate;
use App\Templates\FooterLinkTemplate;
use App\Templates\HeaderLinkTemplate;
use App\Templates\LanguageTemplate;
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
            $template = $request['template'];

            $template['sorting'] = !array_key_exists('sorting', $template) ? [] : array(
                [
                    'id' => $template['sorting'][0]['id'],
                    'desc' => $template['sorting'][1]['desc'] == 'true' ? true : false,
                ]
            );

            $user->{ User::ATTRIBUTE_TEMPLATES}->update([$template['name'] => $template]);
        }

        else
        {
            Template::create([
                Template::FIELD_USER_ID => $user->{ User::FIELD_ID },
                Template::FIELD_FAQS => FaqTemplate::DEFAULT_TEMPLATE,
                Template::FIELD_FOOTER_LINKS => FooterLinkTemplate::DEFAULT_TEMPLATE,
                Template::FIELD_HEADER_LINKS => HeaderLinkTemplate::DEFAULT_TEMPLATE,
                Template::FIELD_LANGUAGES => LanguageTemplate::DEFAULT_TEMPLATE,
            ]);
        }

        return redirect(route($request->route));
    }

    #endregion
}
