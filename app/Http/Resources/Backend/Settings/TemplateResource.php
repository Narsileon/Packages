<?php

namespace App\Http\Resources\Backend\Settings;

#region USE

use App\Models\Template;
use App\Services\TemplateService;
use Illuminate\Http\Resources\Json\JsonResource;

#endregion

class TemplateResource extends JsonResource
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return [
            Template::FIELD_ID => $this->{ Template::FIELD_ID },
            Template::FIELD_TYPE => $this->{ Template::FIELD_TYPE },
            Template::FIELD_TEMPLATE => $this->{ Template::FIELD_TEMPLATE },

            'columns' => TemplateService::getColumns($this->{ Template::FIELD_TYPE })
        ];
    }

    #endregion
}
