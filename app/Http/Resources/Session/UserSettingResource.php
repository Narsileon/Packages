<?php

namespace App\Http\Resources\Session;

#region USE

use App\Models\UserSetting;
use Illuminate\Http\Resources\Json\JsonResource;

#endregion

class UserSettingResource extends JsonResource
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return [
            UserSetting::FIELD_ID => $this->{ UserSetting::FIELD_ID },
            UserSetting::FIELD_DARK => $this->{ UserSetting::FIELD_DARK },
            UserSetting::FIELD_LANGUAGE => $this->{ UserSetting::FIELD_LANGUAGE },
        ];
    }

    #endregion
}
