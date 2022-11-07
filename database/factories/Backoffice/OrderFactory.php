<?php

namespace Database\Factories\Backoffice;

#region USE

use App\Models\Backoffice\Order;
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
