<?php

namespace App\Http\Resources\Backend\Management;

#region USE

use App\Models\UserRole;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;

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

    public function with($request)
    {
        return [
            'meta' => [
                'items' => DB::table('roles')->count(),
            ],
        ];
    }

    #endregion
}
