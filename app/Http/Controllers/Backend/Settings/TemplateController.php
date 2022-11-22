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

        $template = $request['template'];

        $template = self::tryParseSorting($template, Tables::PROPERTY_SORTING);
        $template = self::tryParseVisiblity($template, Tables::PROPERTY_VISIBILITY);

        if (!$user->{ User::ATTRIBUTE_TEMPLATES})
        {
            Template::factory()->create([
                Template::FIELD_USER_ID => $user->{ User::FIELD_ID },
            ]);
        }

        $user->{ User::ATTRIBUTE_TEMPLATES}->update([$template[Tables::PROPERTY_NAME] => $template]);

        return back();
    }

    #endregion

    #region PRIVATE METHODS

    private static function tryParseVisiblity($template, $array)
    {
        if (array_key_exists($array, $template))
        {
            $object =  $template[$array];

            foreach($object as $key=>$value)
            {
                $object[$key] = $value == 'true' ? true : false;
            }

            $template[$array] = $object;
        }

        return $template;
    }

    private static function tryParseSorting($template, $array)
    {
        if (array_key_exists(Tables::PROPERTY_SORTING, $template))
        {
            $template[Tables::PROPERTY_SORTING] = array(
                [
                    Tables::FIELD_ID => $template[Tables::PROPERTY_SORTING][0][Tables::FIELD_ID],
                    Tables::FIELD_DESC => $template[Tables::PROPERTY_SORTING][0][Tables::FIELD_DESC] == 'true' ? true : false,
                ]
            );
        }

        return $template;
    }

    #endregion
}
