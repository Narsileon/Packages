<?php

namespace App\Http\Requests\Backend\Management;

#region USE

use App\Acl\Permissions;
use App\Constants\Tables;
use App\Constants\ValidationRules;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class UserCreateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can(Permissions::USERS_CREATE);
    }

    public function rules() : array
    {
        return [
            User::FIELD_USERNAME => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::min(3),
                ValidationRules::max(255),
                ValidationRules::unique(Tables::TABLE_USERS, User::FIELD_USERNAME),
            ],
            User::FIELD_EMAIL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_EMAIL,
                ValidationRules::unique(Tables::TABLE_USERS, User::FIELD_EMAIL),
            ],
            User::FIELD_PASSWORD => [
                ValidationRules::REQUIRED,
                ValidationRules::CONFIRMED,
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
            User::ATTRIBUTE_ROLES => [
                ValidationRules::OPTIONAL,
                ValidationRules::TYPE_ARRAY,
            ],
            User::ATTRIBUTE_PERMISSIONS => [
                ValidationRules::OPTIONAL,
                ValidationRules::TYPE_ARRAY,
            ],
        ];
    }

    #endregion
}
