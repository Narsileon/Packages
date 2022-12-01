<?php

namespace App\Http\Requests\Backend\Settings;

#region USE

use App\Constants\ValidationRules;
use App\Models\UserMenu;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class UserMenuCreateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function rules() : array
    {
        return [
            UserMenu::FIELD_CATEGORY => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
            ],
            UserMenu::FIELD_ACTIVE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_BOOLEAN,
            ],
            UserMenu::FIELD_TITLE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
            ],
            UserMenu::FIELD_TEMPLATE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_ARRAY,
            ],
        ];
    }

    #endregion PUBLIC METHODS
}
