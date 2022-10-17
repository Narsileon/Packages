<?php

namespace App\Http\Resources\Backoffice\Users;

#region USE

use App\Models\UserPermission;
use Illuminate\Http\Resources\Json\ResourceCollection;

#endregion

class UserPermissionCollection extends ResourceCollection
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return $this->collection->map->only(
            UserPermission::FIELD_ID,
            UserPermission::FIELD_NAME,
            UserPermission::FIELD_GUARD,
        );
    }

    #endregion
}
