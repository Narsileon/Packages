<?php

namespace Database\Factories\Backend;

#region USE

use App\Models\Backend\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

#endregion

class OrderFactory extends Factory
{
    #region PUBLIC METHODS

    public function definition()
    {
        return [
            Order::FIELD_TYPE => fake()->word(),
            Order::FIELD_STATUS => fake()->word(),
            Order::FIELD_ORDER_NUMBER => fake()->ean8(),
            Order::FIELD_ORDER_DATE => fake()->date(),
            Order::FIELD_START_DATE => fake()->date(),
            Order::FIELD_END_DATE => fake()->date(),
            Order::FIELD_START_LOCATION => fake()->address(),
            Order::FIELD_END_LOCATION => fake()->address(),
            Order::FIELD_PAYMENT_METHOD => fake()->creditCardType(),
        ];
    }

    #endregion
}
