<?php

namespace Database\Factories;

#region USE

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

#endregion

class UserFactory extends Factory
{
    public function definition() : array
    {
        return [
            User::FIELD_USERNAME => fake()->unique()->userName(),
            User::FIELD_EMAIL => fake()->safeEmail(),
            User::FIELD_EMAIL_VERIFIED_AT => now(),
            User::FIELD_PASSWORD => fake()->password(),
            User::FIELD_LAST_NAME => fake()->lastName(),
            User::FIELD_FIRST_NAME => fake()->firstName(),
            User::FIELD_REMEMBER_TOKEN => Str::random(10),
        ];
    }

    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            User::FIELD_EMAIL_VERIFIED_AT => null,
        ]);
    }
}
