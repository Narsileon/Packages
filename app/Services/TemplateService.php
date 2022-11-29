<?php

namespace App\Services;

use App\Models\Backend\UserSettings;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

#region USE


#endregion

class TemplateService
{
    #region PUBLIC METHODS

    public static function get($name, $type, $default)
    {
        $user = Auth::user();

        if (!$user || !$user->{ User::ATTRIBUTE_SETTINGS })
        {
            return $default;
        }

        else
        {
            return $user->{ User::ATTRIBUTE_SETTINGS }->where(UserSettings::FIELD_TYPE, '=', $type)->first()->$name;
        }
    }

    #endregion
}
