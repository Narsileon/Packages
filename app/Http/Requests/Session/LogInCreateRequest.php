<?php

namespace App\Http\Requests\Session;

#region USE

use App\Constants\ValidationRules;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class LogInCreateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function rules() : array
    {
        return [
            User::FIELD_EMAIL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_EMAIL,
            ],
            User::FIELD_PASSWORD => [
                ValidationRules::REQUIRED,
            ],
        ];
    }

    #endregion
}
