<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Models\Backend\Template;
use App\Models\User;
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

            if (array_key_exists(Tables::PROPERTY_VISIBILITY, $template))
            {
                $visibility =  $template[Tables::PROPERTY_VISIBILITY];

                foreach($visibility as $key=>$value)
                {
                    $visibility[$key] = $value == 'true' ? true : false;
                }

                $template[Tables::PROPERTY_VISIBILITY] = $visibility;
            }

            $user->{ User::ATTRIBUTE_TEMPLATES}->update([$template[Tables::PROPERTY_NAME] => $template]);
        }

        else
        {
            Template::factory()->create([
                Template::FIELD_USER_ID => $user->{ User::FIELD_ID },
            ]);
        }

        return back();
    }

    #endregion
}
