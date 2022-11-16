<?php

namespace App\Http\Resources\Frontend;

#region USE

use App\Models\Frontend\HeaderLink;
use Illuminate\Http\Resources\Json\ResourceCollection;

#endregion

class HeaderLinkCollection extends ResourceCollection
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return $this->collection->map->only(
            HeaderLink::FIELD_ID,
            HeaderLink::FIELD_LABEL,
            HeaderLink::FIELD_URL,
        );
    }

    #endregion
}