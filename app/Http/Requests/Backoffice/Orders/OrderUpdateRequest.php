<?php

namespace App\Http\Requests\Backoffice\Orders;

#region USE

use App\Constants\ValidationRules;
use App\Models\Backoffice\Order;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class OrderUpdateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can('update', Order::class);
    }

    public function rules() : array
    {
        return [
            Order::FIELD_ORDER_NUMBER => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_INTEGER,
                ValidationRules::unique('orders', Order::FIELD_ORDER_NUMBER, $this->faq->id),
            ],
            Order::FIELD_ORDER_DATE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_DATE,
            ],
        ];
    }

    #endregion PUBLIC METHODS
}
