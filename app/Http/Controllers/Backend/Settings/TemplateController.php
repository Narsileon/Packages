<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Resources\Backend\Settings\TemplateResource;
use App\Models\Backend\UserSettings;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

#endregion

class TemplateController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $templates = new TemplateResource(Auth::user()->{ User::ATTRIBUTE_SETTINGS });

        return Inertia::render('Backend/Settings/Templates/Index', compact(
            'templates'
        ));
    }

    public function update(Request $request)
    {
        $template = $request['template'];

        $template = self::tryParseSorting($template, Tables::PROPERTY_SORTING);
        $template = self::tryParseVisiblity($template, Tables::PROPERTY_COLUMN_VISIBILITY);

        if (!Auth::user()->{ User::ATTRIBUTE_SETTINGS})
        {
            UserSettings::factory()->create([
                UserSettings::FIELD_USER_ID => Auth::user()->{ User::FIELD_ID },
                $template[Tables::PROPERTY_NAME] => $template,
            ]);
        }

        else
        {
            Auth::user()->{ User::ATTRIBUTE_SETTINGS}->update([$template[Tables::PROPERTY_NAME] => $template]);
        }

        return back();
    }

    #endregion

    #region PRIVATE METHODS

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

    #endregion
}
