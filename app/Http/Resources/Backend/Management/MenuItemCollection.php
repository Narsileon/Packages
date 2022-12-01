<?php

namespace App\Http\Resources\Backend\Management;

#region USE

use App\Models\MenuItem;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;

#endregion

class MenuItemCollection extends ResourceCollection
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return $this->collection->map->only(
            MenuItem::FIELD_ID,
            MenuItem::FIELD_ACTIVE,
            MenuItem::FIELD_TYPE,
            MenuItem::FIELD_ICON,
            MenuItem::FIELD_LABEL,
            MenuItem::FIELD_URL,
            MenuItem::CREATED_AT,
            MenuItem::UPDATED_AT,
        );
    }

    public function with($request)
    {
        return [
            'meta' => [
                'items' => DB::table('menu_items')->count(),
            ],
        ];
    }

    #endregion
}
