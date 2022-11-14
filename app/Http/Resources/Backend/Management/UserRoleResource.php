<?php

namespace App\Http\Resources\Backend\Management;

#region USE

use App\Models\UserRole;
use Illuminate\Http\Resources\Json\JsonResource;

#endregion

class UserRoleResource extends JsonResource
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return [
            UserRole::FIELD_ID => $this->{ UserRole::FIELD_ID },
            UserRole::FIELD_NAME => $this->{ UserRole::FIELD_NAME },
            UserRole::CREATED_AT => $this->{ UserRole::CREATED_AT },
            UserRole::UPDATED_AT => $this->{ UserRole::UPDATED_AT },

            UserRole::ATTRIBUTE_PERMISSIONS => new UserRolePermissionCollection($this->permissions)
        ];
    }

    #endregion
}
