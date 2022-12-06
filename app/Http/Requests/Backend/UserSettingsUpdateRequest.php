<?php

namespace App\Http\Requests\Backend;

#region USE

use App\Constants\ValidationRules;
use App\Models\UserSetting;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class UserSettingsUpdateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function rules() : array
    {
        return [
            UserSetting::FIELD_DARK => [
                ValidationRules::OPTIONAL,
                ValidationRules::TYPE_BOOLEAN,
            ],
            UserSetting::FIELD_LANGUAGE => [
                ValidationRules::OPTIONAL,
                ValidationRules::TYPE_STRING,
            ],
        ];
    }

    #endregion PUBLIC METHODS
}
