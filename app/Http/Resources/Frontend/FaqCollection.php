<?php

namespace App\Http\Resources\Frontend;

#region USE

use App\Models\Frontend\Faq;
use Illuminate\Http\Resources\Json\ResourceCollection;

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
        );
    }

    #endregion
}
