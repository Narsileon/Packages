<?php

namespace App\Http\Resources\Backend\Frontoffice;

#region USE

use App\Models\Frontend\FooterLink;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;

#endregion

class FooterLinkCollection extends ResourceCollection
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return $this->collection->map->only(
            FooterLink::FIELD_ID,
            FooterLink::FIELD_URL,
            FooterLink::FIELD_LABEL,
            FooterLink::FIELD_ACTIVE,
            FooterLink::CREATED_AT,
            FooterLink::UPDATED_AT,
        );
    }

    public function with($request)
    {
        return [
            'meta' => [
                'items' => DB::table('footer_links')->count(),
            ],
        ];
    }

    #endregion
}
