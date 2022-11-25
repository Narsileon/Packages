<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Models\Frontend\Faq;
use App\Models\Frontend\FooterLink;
use Illuminate\Database\Seeder;

#endregion

class FrontendSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->createFooterLinks();
        $this->createQuestions();
    }

    #endregion

    #region PRIVATE METHODS

    private function createFooterLinks()
    {
        FooterLink::create([
            FooterLink::FIELD_LABEL => 'FAQ',
            FooterLink::FIELD_URL => route('faq'),
            FooterLink::FIELD_ACTIVE => true,
        ]);
    }

    private function createQuestions()
    {
        Faq::factory(10)->create();
    }

    #endregion
}
