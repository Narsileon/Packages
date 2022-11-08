<?php

namespace App\Http\Resources\Web\Links;

#region USE

use App\Models\Web\FooterLink;
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
