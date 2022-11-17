<?php

namespace App\Traits;

#region USE

use App\Constants\Tables;
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

    public function scopeNewSort($query, $sort)
    {
        $query->orderBy($sort->id, $sort->desc ? Tables::FIELD_DESC : Tables::FIELD_ASC);
    }

    #endregion
}
