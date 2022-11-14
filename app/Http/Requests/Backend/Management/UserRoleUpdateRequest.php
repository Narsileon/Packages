<?php

namespace App\Http\Requests\Backend\Management;

#region USE

use App\Acl\Permissions;
use App\Constants\ValidationRules;
use App\Models\UserRole;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class UserRoleUpdateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can(Permissions::ROLES_UPDATE);
    }

    public function rules() : array
    {
        return [
            UserRole::FIELD_NAME => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::min(3),
                ValidationRules::max(255),
                ValidationRules::unique('roles', UserRole::FIELD_NAME, $this->role->id),
            ],
            UserRole::ATTRIBUTE_PERMISSIONS => [
                ValidationRules::OPTIONAL,
                ValidationRules::TYPE_ARRAY,
            ],
        ];
    }

    #endregion
}
