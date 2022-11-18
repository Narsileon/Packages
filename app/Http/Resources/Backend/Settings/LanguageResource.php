<?php

namespace App\Http\Resources\Backend\Settings;

#region USE

use App\Models\Backend\Language;
use Illuminate\Http\Resources\Json\JsonResource;

#endregion

class LanguageResource extends JsonResource
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return [
            Language::FIELD_ID => $this->{ Language::FIELD_ID },
            Language::FIELD_CODE => $this->{ Language::FIELD_CODE },
            Language::FIELD_ACTIVE => $this->{ Language::FIELD_ACTIVE },
            Language::PROPERTY_LANGUAGE => __('locales.' . $this->{ Language::FIELD_CODE }),
        ];
    }

    #endregion
}
