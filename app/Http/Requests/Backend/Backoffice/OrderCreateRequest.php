<?php

namespace App\Http\Requests\Backend\Backoffice;

#region USE

use App\Constants\ValidationRules;
use App\Models\Backend\Order;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class OrderCreateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can('create', Order::class);
    }

    public function rules() : array
    {
        return [
            Order::FIELD_ORDER_NUMBER => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_INTEGER,
                ValidationRules::unique('orders', Order::FIELD_ORDER_NUMBER),
            ],
            Order::FIELD_ORDER_DATE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_DATE,
            ],
        ];
    }

    #endregion
}
