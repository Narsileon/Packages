<?php

namespace App\Http\Requests\Backend\Management;

#region USE

use App\Constants\ValidationRules;
use App\Models\Menu;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class MenuCreateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function rules() : array
    {
        return [
            Menu::FIELD_TYPE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
            ],
            Menu::FIELD_ACTIVE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_BOOLEAN,
            ],
            Menu::FIELD_TITLE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
            ],
            Menu::FIELD_TEMPLATE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_ARRAY,
            ],
        ];
    }

    #endregion PUBLIC METHODS
}
