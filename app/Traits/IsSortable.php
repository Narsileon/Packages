<?php

namespace App\Traits;

#region USE

use Illuminate\Support\Facades\Request;

#endregion

trait IsSortable
{
    #region PUBLIC METHODS

    public function scopeSort($query)
    {
        $query->when(Request::input('sort'), function ($query, $sort) {
            $query->orderBy(Request::input('field'), $sort);
        });
    }

    #endregion
}
