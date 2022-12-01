<?php

namespace App\Services;

use App\Models\UserTemplates;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

#region USE


#endregion

class TemplateService
{
    #region PUBLIC METHODS

    public static function create($user_id)
    {
        UserTemplates::factory()->create([
            UserTemplates::FIELD_USER_ID => $user_id,
            UserTemplates::FIELD_TYPE => UserTemplates::TYPE_DEFAULT,
        ]);

        UserTemplates::factory()->create([
            UserTemplates::FIELD_USER_ID => $user_id,
            UserTemplates::FIELD_TYPE => UserTemplates::TYPE_CUSTOM,
        ]);
    }

    public static function get($name, $type, $default)
    {
        $user = Auth::user();

        if (!$user || !$user->{ User::ATTRIBUTE_TEMPLATES })
        {
            return $default;
        }

        else
        {
            return $user->{ User::ATTRIBUTE_TEMPLATES }->where(UserTemplates::FIELD_TYPE, '=', $type)->first()->$name;
        }
    }

    #endregion
}
