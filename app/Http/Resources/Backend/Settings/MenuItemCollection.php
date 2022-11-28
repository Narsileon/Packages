<?php

namespace App\Http\Resources\Backend\Settings;

#region USE

use App\Models\MenuItem;
use Illuminate\Http\Resources\Json\ResourceCollection;

#endregion

class MenuItemCollection extends ResourceCollection
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return $this->collection->map->only(
            MenuItem::FIELD_ID,
            MenuItem::FIELD_TYPE,
            MenuItem::FIELD_ICON,
            MenuItem::FIELD_LABEL,
            MenuItem::FIELD_URL,
        );
    }

    #endregion
}
