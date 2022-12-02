<?php

namespace App\Http\Requests\Backend\Backoffice;

#region USE

use App\Acl\Permissions;
use App\Constants\ValidationRules;
use App\Models\Backend\Order;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class OrderUpdateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can(Permissions::ORDERS_UPDATE);
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
