<?php

namespace App\Traits;

#region USE

use App\Constants\Tables;
use Illuminate\Support\Facades\Schema;

#endregion

trait IsFilterable
{
    #region PUBLIC METHODS

    public function scopeSearch($query, $template)
    {
        $globalFilter = array_key_exists(Tables::PROPERTY_GLOBAL_FILTER, $template) ? $template[Tables::PROPERTY_GLOBAL_FILTER] : '';
        $localFilter = array_key_exists(Tables::PROPERTY_COLUMN_FILTERS, $template) ? $template[Tables::PROPERTY_COLUMN_FILTERS] : [];

        $columns = Schema::getColumnListing($this->getTable());

        foreach($columns as $column)
        {
            $query->orWhere($column, 'like', '%' . $globalFilter . '%');

            foreach($localFilter as $columnFilter)
            {
                $query->where($columnFilter[Tables::FIELD_ID], 'like', '%' . $columnFilter[Tables::FIELD_VALUE] . '%');
            }
        }
    }

    public function scopeFilter($query, array $filters)
    {
        foreach($filters as $key=>$value)
        {
            if (Schema::hasColumn($this->getTable(), $key))
            {
                $query->when($value ?? false, fn ($query, $search) =>
                    $query->where($key, 'like', '%' . $search . '%')
                );
            }

            else
            {
                $this->foreignScopeFilter($query, $key, $value);
            }
        }
    }

    public function foreignScopeFilter($query, $key, $value)
    {

    }

    #endregion
}
