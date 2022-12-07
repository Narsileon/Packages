<?php

namespace App\Traits;

#region USE

use App\Constants\Tables;
use App\Models\UserTemplate;

#endregion

trait IsSortable
{
    #region PUBLIC METHODS

    public function scopeSort($query, $tableSettings)
    {
        if (array_key_exists(Tables::PROPERTY_SORTING, $tableSettings->{ UserTemplate::FIELD_CUSTOM }))
        {
            foreach($tableSettings->{ UserTemplate::FIELD_CUSTOM }[Tables::PROPERTY_SORTING] as $sorting)
            {
                $query->orderBy($sorting[Tables::FIELD_ID], $sorting[Tables::FIELD_DESC] ? Tables::ORDER_DESC : Tables::ORDER_ASC);
            }
        }
    }

    #endregion
}
