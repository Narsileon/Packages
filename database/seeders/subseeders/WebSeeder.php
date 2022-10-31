<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Models\Web\Faq;
use App\Models\Web\FooterLink;
use Illuminate\Database\Seeder;

#endregion

class WebSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->CreateFooterLinks();
        $this->CreateQuestions();
    }

    #endregion

    #region PRIVATE METHODS

    private function CreateFooterLinks()
    {
        FooterLink::factory()->create([
            FooterLink::FIELD_LABEL => 'FAQ',
            FooterLink::FIELD_URL => route('faq'),
            FooterLink::FIELD_ACTIVE => true,
        ]);
    }

    private function CreateQuestions()
    {
        Faq::factory(10)->create();
    }

    #endregion
}
