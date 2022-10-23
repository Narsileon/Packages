<?php

namespace App\Traits;

#region USE

use Illuminate\Support\Facades\Schema;

#endregion

trait IsFilterable
{
    #region PUBLIC METHODS

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
