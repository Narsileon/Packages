<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\TableConstants;
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
        $templates = new TemplateResource(Auth::user()->{ User::ATTRIBUTE_SETTINGS }->where(UserSettings::FIELD_TYPE, '=', UserSettings::TYPE_DEFAULT)->first());

        return Inertia::render('Backend/Settings/Templates/Index', compact(
            'templates'
        ));
    }

    public function update(Request $request)
    {
        $template = $request['template'];

        $template = self::tryParseSorting($template, TableConstants::PROPERTY_SORTING);
        $template = self::tryParseVisiblity($template, TableConstants::PROPERTY_COLUMN_VISIBILITY);

        Auth::user()->{ User::ATTRIBUTE_SETTINGS}->where(UserSettings::FIELD_TYPE, '=', UserSettings::TYPE_CUSTOM)->update([
            $template[TableConstants::PROPERTY_NAME] => $template
        ]);

        return back();
    }

    #endregion

    #region PRIVATE METHODS

    private static function tryParseSorting($template, $array)
    {
        if (array_key_exists(TableConstants::PROPERTY_SORTING, $template))
        {
            $template[TableConstants::PROPERTY_SORTING] = array(
                [
                    TableConstants::FIELD_ID => $template[TableConstants::PROPERTY_SORTING][0][TableConstants::FIELD_ID],
                    TableConstants::FIELD_DESC => $template[TableConstants::PROPERTY_SORTING][0][TableConstants::FIELD_DESC] == 'true' ? true : false,
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
