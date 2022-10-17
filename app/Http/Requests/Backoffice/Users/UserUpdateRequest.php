<?php

namespace App\Http\Requests\Backoffice\Users;

#region USE

use App\Acl\Permissions;
use App\Constants\ValidationRules;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class UserUpdateRequest extends FormRequest
{
    public function authorize() : bool
    {
        return $this->user()->can(Permissions::USERS_UPDATE);
    }

    public function rules() : array
    {
        return [
            User::FIELD_USERNAME => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::min(3),
                ValidationRules::max(255),
                ValidationRules::unique('users', User::FIELD_USERNAME, $this->user->id),
            ],
            User::FIELD_EMAIL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_EMAIL,
                ValidationRules::unique('users', User::FIELD_EMAIL, $this->user->id),
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
}
