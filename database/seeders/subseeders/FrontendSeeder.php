<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Models\Frontend\Faq;
use Illuminate\Database\Seeder;

#endregion

class FrontendSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->createQuestions();
    }

    #endregion

    #region PRIVATE METHODS

    private function createQuestions()
    {
        Faq::factory(10)->create();
    }

    #endregion
}
