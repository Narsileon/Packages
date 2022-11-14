<?php

namespace App\Http\Resources\Backend\Users;

#region USE

use App\Models\UserPermission;
use Illuminate\Http\Resources\Json\JsonResource;

#endregion

class UserPermissionResource extends JsonResource
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return [
            UserPermission::FIELD_ID => $this->{ UserPermission::FIELD_ID },
            UserPermission::FIELD_NAME => $this->{ UserPermission::FIELD_NAME },
        ];
    }

    #endregion
}
