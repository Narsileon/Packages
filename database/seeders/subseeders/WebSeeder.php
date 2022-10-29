<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Models\Web\Faq;
use Illuminate\Database\Seeder;

#endregion

class WebSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        $this->CreateQuestions();
    }

    #endregion

    #region PRIVATE METHODS

    private function CreateQuestions()
    {
        Faq::factory(10)->create();
    }

    #endregion
}
