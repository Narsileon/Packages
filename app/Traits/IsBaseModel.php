<?php

namespace App\Traits;

#region USE

use Carbon\Carbon;

#endregion

trait IsBaseModel
{
    #region PUBLIC METHODS

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('Y-m-d H:i:s');
    }

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('Y-m-d H:i:s');
    }

    #endregion
}
