<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\UserTemplateUpdateRequest;
use App\Models\UserTemplate;
use App\Services\TemplateService;
use Inertia\Inertia;

#endregion

class UserTemplateController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $tables = [];

        foreach(Tables::TEMPLATES as $table)
        {
            $tables[$table] = TemplateService::get($table, Tables::CATEGORY_DEFAULT);
        }

        return Inertia::render('Backend/Settings/UserTemplates/Index', compact(
            'tables'
        ));
    }

    public function update(UserTemplateUpdateRequest $request, UserTemplate $userTemplate)
    {
        $attributes = $request->validated();

        $attributes[UserTemplate::FIELD_TEMPLATE] = self::tryParseSorting($attributes[UserTemplate::FIELD_TEMPLATE], Tables::PROPERTY_SORTING);
        $attributes[UserTemplate::FIELD_TEMPLATE] = self::tryParseVisiblity($attributes[UserTemplate::FIELD_TEMPLATE], Tables::PROPERTY_COLUMN_VISIBILITY);

        $userTemplate->update($attributes);

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
