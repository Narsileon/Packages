<?php

namespace App\Http\Resources\Backend\Settings;

#region USE

use App\Constants\MenuConstants;
use App\Models\MenuItem;
use Illuminate\Http\Resources\Json\JsonResource;

#endregion

class MenuItemResource extends JsonResource
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return [
            MenuItem::FIELD_ID => $this->{ MenuItem::FIELD_ID },
            MenuItem::FIELD_TYPE => $this->{ MenuItem::FIELD_TYPE },
            MenuItem::FIELD_ICON => $this->{ MenuItem::FIELD_ICON },
            MenuItem::FIELD_LABEL => $this->{ MenuItem::FIELD_LABEL },
            MenuItem::FIELD_URL => $this->{ MenuItem::FIELD_URL },
            MenuConstants::FIELD_CHILDREN => [],
        ];
    }

    #endregion
}
