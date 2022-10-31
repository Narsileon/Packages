<?php

namespace Database\Factories\Web;

#region USE

use App\Models\Web\FooterLink;
use Illuminate\Database\Eloquent\Factories\Factory;

#endregion

class FooterLinkFactory extends Factory
{
    #region PUBLIC METHODS

    public function definition()
    {
        return [
            FooterLink::FIELD_LABEL => fake()->title(),
            FooterLink::FIELD_URL => fake()->url(),
            FooterLink::FIELD_ACTIVE => fake()->boolean(),
        ];
    }

    #endregion
}
