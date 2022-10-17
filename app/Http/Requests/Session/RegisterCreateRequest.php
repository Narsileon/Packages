<?php

namespace App\Http\Requests\Session;

#region USE

use App\Constants\ValidationRules;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class RegisterCreateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function rules() : array
    {
        return [
            User::FIELD_USERNAME => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::min(3),
                ValidationRules::max(255),
                ValidationRules::unique('users', User::FIELD_USERNAME),
            ],
            User::FIELD_EMAIL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_EMAIL,
                ValidationRules::unique('users', User::FIELD_EMAIL),
            ],
            User::FIELD_PASSWORD => [
                ValidationRules::REQUIRED,
                ValidationRules::min(8),
                ValidationRules::max(255),
            ],
            User::FIELD_LAST_NAME => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::min(3),
                ValidationRules::max(255),
            ],
            User::FIELD_FIRST_NAME => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::min(3),
                ValidationRules::max(255),
            ],
        ];
    }

    #endregion
}
