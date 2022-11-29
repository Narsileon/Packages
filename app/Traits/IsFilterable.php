<?php

namespace App\Traits;

#region USE

use App\Constants\TableConstants;
use Illuminate\Support\Facades\Schema;

#endregion

trait IsFilterable
{
    #region PUBLIC METHODS

    public function scopeSearch($query, $template)
    {
        $globalFilter = array_key_exists(TableConstants::PROPERTY_GLOBAL_FILTER, $template) ? $template[TableConstants::PROPERTY_GLOBAL_FILTER] : '';
        $localFilter = array_key_exists(TableConstants::PROPERTY_COLUMN_FILTERS, $template) ? $template[TableConstants::PROPERTY_COLUMN_FILTERS] : [];

        $columns = Schema::getColumnListing($this->getTable());

        foreach($columns as $column)
        {
            $query->orWhere($column, 'like', '%' . $globalFilter . '%');

            foreach($localFilter as $columnFilter)
            {
                if (is_array($columnFilter[TableConstants::FIELD_VALUE]))
                {
                    $this->scopeMinMax($query, $columnFilter[TableConstants::FIELD_ID], $columnFilter[TableConstants::FIELD_VALUE]);
                }

                else
                {
                    $query->where($columnFilter[TableConstants::FIELD_ID], 'like', '%' . $columnFilter[TableConstants::FIELD_VALUE] . '%');
                }
            }
        }
    }

    #endregion

    #region PRIVATE METHODS

    private function scopeMinMax($query, $key, $values)
    {
        if (array_key_exists(0, $values) && $values[0])
        {
            $query->where($key, '>=', $values[0]);
        }

        if (array_key_exists(1, $values) && $values[1])
        {
            $query->where($key, '<=', $values[1]);
        }
    }

    #endregion
}
