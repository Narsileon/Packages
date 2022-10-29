<?php

namespace Database\Factories\Web;

#region USE

use App\Models\Web\Faq;
use Illuminate\Database\Eloquent\Factories\Factory;

#endregion

class FaqFactory extends Factory
{
    public function definition()
    {
        return [
            Faq::FIELD_QUESTION => fake()->sentence(),
            Faq::FIELD_ANSWER => fake()->paragraph(),
        ];
    }
}
