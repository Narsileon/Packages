<?php

namespace App\Http\Requests\Backend\Settings;

#region USE

use App\Constants\ValidationRules;
use App\Models\UserTemplate;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class UserTemplateUpdateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function rules() : array
    {
        return [
            UserTemplate::FIELD_TYPE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
            ],
            UserTemplate::FIELD_DEFAULT => [
                ValidationRules::OPTIONAL,
                ValidationRules::TYPE_ARRAY,
            ],
            UserTemplate::FIELD_CUSTOM => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_ARRAY,
            ],
        ];
    }

    #endregion PUBLIC METHODS
}
