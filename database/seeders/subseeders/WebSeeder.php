<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Models\Frontend\Faq;
use App\Models\Frontend\FooterLink;
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
        FooterLink::create([
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
