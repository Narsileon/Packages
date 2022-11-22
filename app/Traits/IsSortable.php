<?php

namespace App\Traits;

#region USE

use App\Constants\Tables;

#endregion

trait IsSortable
{
    #region PUBLIC METHODS

    public function scopeSort($query, $template)
    {
        if (array_key_exists(Tables::PROPERTY_SORTING, $template))
        {
            $sorting = $template[Tables::PROPERTY_SORTING][0];

            $query->orderBy($sorting[Tables::FIELD_ID], $sorting[Tables::FIELD_DESC] ? Tables::ORDER_DESC : Tables::ORDER_ASC);
        }
    }

    #endregion
}
