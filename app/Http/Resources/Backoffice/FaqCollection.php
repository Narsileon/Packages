<?php

namespace App\Http\Resources\Backoffice;

#region USE

use App\Models\Web\Faq;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;

#endregion

class FaqCollection extends ResourceCollection
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return $this->collection->map->only(
            Faq::FIELD_ID,
            Faq::FIELD_QUESTION,
            Faq::FIELD_ANSWER,

            Faq::CREATED_AT,
            Faq::UPDATED_AT,
        );
    }

    public function with($request)
    {
        return [
            'meta' => [
                'items' => DB::table('faqs')->count(),
            ],
        ];
    }

    #endregion
}
