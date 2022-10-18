<?php

namespace App\Http\Resources\Backoffice\Users;

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

            UserRole::ATTRIBUTE_PERMISSIONS => new UserRolePermissionCollection($this->permissions)
        ];
    }

    #endregion
}
