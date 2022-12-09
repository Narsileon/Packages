<?php

namespace App\Http\Requests\Backend\Settings;

#region USE

use App\Constants\ValidationRules;
use App\Models\Backend\Localization;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class LocalizationUpdateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function rules() : array
    {
        return [
            Localization::FIELD_CODE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
            ],
            Localization::FIELD_LOCALIZATION => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_ARRAY,
            ],
        ];
    }

    #endregion PUBLIC METHODS
}
