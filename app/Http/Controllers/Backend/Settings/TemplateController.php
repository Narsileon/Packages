<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Models\Backend\Template;
use App\Models\User;
use App\Templates\FaqTemplate;
use App\Templates\FooterLinkTemplate;
use App\Templates\HeaderLinkTemplate;
use App\Templates\LanguageTemplate;
use App\Templates\OrderTemplate;
use App\Templates\RoleTemplate;
use App\Templates\UserTemplate;
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

            $template[Tables::PROPERTY_SORTING] = !array_key_exists(Tables::PROPERTY_SORTING, $template) ? [] : array(
                [
                    Tables::FIELD_ID => $template[Tables::PROPERTY_SORTING][0][Tables::FIELD_ID],
                    Tables::FIELD_DESC => $template[Tables::PROPERTY_SORTING][1][Tables::FIELD_DESC] == 'true' ? true : false,
                ]
            );

            $user->{ User::ATTRIBUTE_TEMPLATES}->update([$template[Tables::PROPERTY_NAME] => $template]);
        }

        else
        {
            Template::create([
                Template::FIELD_USER_ID => $user->{ User::FIELD_ID },
                Template::FIELD_FAQS => FaqTemplate::DEFAULT_TEMPLATE,
                Template::FIELD_FOOTER_LINKS => FooterLinkTemplate::DEFAULT_TEMPLATE,
                Template::FIELD_HEADER_LINKS => HeaderLinkTemplate::DEFAULT_TEMPLATE,
                Template::FIELD_LANGUAGES => LanguageTemplate::DEFAULT_TEMPLATE,
                Template::FIELD_ORDERS => OrderTemplate::DEFAULT_TEMPLATE,
                Template::FIELD_ROLES => RoleTemplate::DEFAULT_TEMPLATE,
                Template::FIELD_USERS => UserTemplate::DEFAULT_TEMPLATE,
            ]);
        }

        return redirect(route($request->route));
    }

    #endregion
}
