<?php

namespace App\Http\Resources\Backend\Backoffice;

#region USE

use App\Models\Backend\Order;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;

#endregion

class OrderCollection extends ResourceCollection
{
    #region PUBLIC METHODS

    public function toArray($request)
    {
        return $this->collection->map->only(
            Order::FIELD_ID,
            Order::FIELD_TYPE,
            Order::FIELD_STATUS,
            Order::FIELD_ORDER_NUMBER,
            Order::FIELD_ORDER_DATE,
            Order::FIELD_START_DATE,
            Order::FIELD_END_DATE,
            Order::FIELD_LOCATION_DEPARTURE,
            Order::FIELD_LOCATION_ARRIVAL,
            Order::FIELD_PAYMENT_METHOD,
            Order::CREATED_AT,
            Order::UPDATED_AT,
        );
    }

    public function with($request)
    {
        return [
            'meta' => [
                'items' => DB::table('orders')->count(),
            ],
        ];
    }

    #endregion
}
