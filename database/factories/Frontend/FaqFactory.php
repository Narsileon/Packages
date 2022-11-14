<?php

namespace Database\Factories\Frontend;

#region USE

use App\Models\Frontend\Faq;
use Illuminate\Database\Eloquent\Factories\Factory;

#endregion

class FaqFactory extends Factory
{
    #region PUBLIC METHODS

    public function definition()
    {
        return [
            Faq::FIELD_QUESTION => fake()->sentence(),
            Faq::FIELD_ANSWER => fake()->paragraph(),
        ];
    }

    #endregion
}
