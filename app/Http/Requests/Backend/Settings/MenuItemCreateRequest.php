<?php

namespace App\Http\Requests\Backend\Settings;

#region USE

use App\Constants\ValidationRules;
use App\Models\MenuItem;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class MenuItemCreateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function rules() : array
    {
        return [
            MenuItem::FIELD_TYPE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
            ],
            MenuItem::FIELD_ICON => [
                ValidationRules::OPTIONAL,
                ValidationRules::TYPE_STRING,
            ],
            MenuItem::FIELD_LABEL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
            ],
            MenuItem::FIELD_URL => [
                ValidationRules::OPTIONAL,
                ValidationRules::TYPE_STRING,
            ],
        ];
    }

    #endregion
}
