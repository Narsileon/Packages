<?php

namespace App\Traits;

#region USE

use App\Constants\TableConstants;

#endregion

trait IsSortable
{
    #region PUBLIC METHODS

    public function scopeSort($query, $template)
    {
        if (array_key_exists(TableConstants::PROPERTY_SORTING, $template))
        {
            $sorting = $template[TableConstants::PROPERTY_SORTING][0];

            $query->orderBy($sorting[TableConstants::FIELD_ID], $sorting[TableConstants::FIELD_DESC] ? TableConstants::ORDER_DESC : TableConstants::ORDER_ASC);
        }
    }

    #endregion
}
