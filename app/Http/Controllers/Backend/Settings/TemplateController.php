<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Models\Backend\Template;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

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
            Template::factory()->create([
                Template::FIELD_USER_ID => $user->{ User::FIELD_ID },
            ]);
        }

        return Redirect::back();
    }

    #endregion
}
