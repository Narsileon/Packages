<?php

namespace App\Http\Requests\Backend\Settings;

#region USE

use App\Constants\ValidationRules;
use App\Models\UserLocalization;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class UserLocalizationUpdateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function rules() : array
    {
        return [
            UserLocalization::FIELD_DICTIONARY => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_ARRAY,
            ],
        ];
    }

    #endregion PUBLIC METHODS
}
