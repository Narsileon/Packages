<?php

namespace App\Http\Resources\Backend\Settings;

#region USE

use App\Models\Backend\Localization;
use Illuminate\Http\Resources\Json\JsonResource;

#endregion

class LanguageResource extends JsonResource
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return [
            Localization::FIELD_ID => $this->{ Localization::FIELD_ID },
            Localization::FIELD_CODE => $this->{ Localization::FIELD_CODE },
            Localization::FIELD_LOCALIZATION => $this->{ Localization::FIELD_LOCALIZATION },
        ];
    }

    #endregion
}
