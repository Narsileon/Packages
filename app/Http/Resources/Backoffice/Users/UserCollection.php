<?php

namespace App\Http\Resources\Backoffice\Users;

#region USE

use App\Models\User;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;

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
            User::CREATED_AT,
            User::UPDATED_AT,
        );
    }

    public function with($request)
    {
        return [
            'meta' => [
                'items' => DB::table('users')->count(),
            ],
        ];
    }

    #endregion
}
