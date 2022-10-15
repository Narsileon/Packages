<?php

namespace App\Http\Resources\Backoffice\Users;

#region USE

use App\Models\User;
use Illuminate\Http\Resources\Json\ResourceCollection;

#endregion

class UserCollection extends ResourceCollection
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return $this->collection->map->only(
            User::FIELD_ID,
            User::FIELD_USERNAME,
            User::FIELD_EMAIL,
            User::FIELD_LAST_NAME,
            User::FIELD_FIRST_NAME,
        );
    }

    #endregion
}
