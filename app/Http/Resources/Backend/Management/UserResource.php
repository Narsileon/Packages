<?php

namespace App\Http\Resources\Backend\Managament;

#region USE

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

#endregion

class UserResource extends JsonResource
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return [
            User::FIELD_ID => $this->{ User::FIELD_ID },
            User::FIELD_USERNAME => $this->{ User::FIELD_USERNAME },
            User::FIELD_EMAIL => $this->{ User::FIELD_EMAIL },
            User::FIELD_LAST_NAME => $this->{ User::FIELD_LAST_NAME },
            User::FIELD_FIRST_NAME => $this->{ User::FIELD_FIRST_NAME },
            User::CREATED_AT => $this->{ User::CREATED_AT },
            User::UPDATED_AT => $this->{ User::UPDATED_AT },

            User::ATTRIBUTE_ROLES => new UserRoleCollection($this->{ User::ATTRIBUTE_ROLES}),
            User::ATTRIBUTE_PERMISSIONS => new UserPermissionCollection($this->getAllPermissions()),
        ];
    }

    #endregion
}
