<?php

namespace App\Http\Resources\Backend\Management;

#region USE

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
            MenuItem::FIELD_ACTIVE => $this->{ MenuItem::FIELD_ACTIVE },
            MenuItem::FIELD_ICON => $this->{ MenuItem::FIELD_ICON },
            MenuItem::FIELD_LABEL => $this->{ MenuItem::FIELD_LABEL },
            MenuItem::FIELD_SLUG => $this->{ MenuItem::FIELD_SLUG },
            MenuItem::FIELD_TYPE => $this->{ MenuItem::FIELD_TYPE },
            MenuItem::FIELD_URL => $this->{ MenuItem::FIELD_URL },
            MenuItem::FIELD_CHILDREN => $this->{ MenuItem::FIELD_CHILDREN },
            MenuItem::CREATED_AT => $this->{ MenuItem::CREATED_AT },
            MenuItem::UPDATED_AT => $this->{ MenuItem::UPDATED_AT },

            MenuItem::ATTRIBUTE_ROLES => new UserRoleCollection($this->{ MenuItem::ATTRIBUTE_ROLES}),
            MenuItem::ATTRIBUTE_PERMISSIONS => new UserPermissionCollection($this->getAllPermissions()),
        ];
    }

    #endregion
}

