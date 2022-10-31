<?php

namespace App\Http\Resources\Backoffice\Users;

#region USE

use App\Models\UserRole;
use Illuminate\Http\Resources\Json\ResourceCollection;

#endregion

class UserRoleCollection extends ResourceCollection
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return $this->collection->map->only(
            UserRole::FIELD_ID,

            UserRole::FIELD_NAME,

            UserRole::CREATED_AT,
            UserRole::UPDATED_AT,
        );
    }

    #endregion
}
