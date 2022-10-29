<?php

namespace App\Http\Resources\Web\Faqs;

#region USE

use App\Models\Web\Faq;
use Illuminate\Http\Resources\Json\ResourceCollection;

#endregion

class FaqCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return $this->collection->map->only(
            Faq::FIELD_ID,
            Faq::FIELD_QUESTION,
            Faq::FIELD_ANSWER,
        );
    }
}
