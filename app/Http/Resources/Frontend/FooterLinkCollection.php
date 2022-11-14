<?php

namespace App\Http\Resources\Frontend;

#region USE

use App\Models\Frontend\FooterLink;
use Illuminate\Http\Resources\Json\ResourceCollection;

#endregion

class FooterLinkCollection extends ResourceCollection
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return $this->collection->map->only(
            FooterLink::FIELD_ID,
            FooterLink::FIELD_LABEL,
            FooterLink::FIELD_URL,
        );
    }

    #endregion
}
