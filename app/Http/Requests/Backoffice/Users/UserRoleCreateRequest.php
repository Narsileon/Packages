<?php

namespace App\Http\Requests\Backoffice\Users;

#region USE

use App\Acl\Permissions;
use App\Constants\ValidationRules;
use App\Models\UserRole;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class UserRoleCreateRequest extends FormRequest
{
    public function authorize() : bool
    {
        return $this->user()->hasPermissionTo(Permissions::ROLES_CREATE);
    }

    public function rules() : array
    {
        return [
            UserRole::FIELD_NAME => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::min(3),
                ValidationRules::max(255),
                ValidationRules::unique('roles', UserRole::FIELD_NAME),
            ],
        ];
    }
}
