<?php

namespace App\Http\Resources\Backend\Frontoffice;

#region USE

use App\Models\Frontend\HeaderLink;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;

#endregion

class HeaderLinkCollection extends ResourceCollection
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return $this->collection->map->only(
            HeaderLink::FIELD_ID,
            HeaderLink::FIELD_URL,
            HeaderLink::FIELD_LABEL,
            HeaderLink::FIELD_ACTIVE,
            HeaderLink::CREATED_AT,
            HeaderLink::UPDATED_AT,
        );
    }

    public function with($request)
    {
        return [
            'meta' => [
                'items' => DB::table('header_links')->count(),
            ],
        ];
    }

    #endregion
}
