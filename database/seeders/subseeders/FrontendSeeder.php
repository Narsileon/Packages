<?php

namespace Database\Seeders\Subseeders;

#region USE

use App\Models\Frontend\Faq;
use App\Services\MenuService;
use App\Templates\Menus\FrontendFooterTemplate;
use App\Templates\Menus\FrontendHeaderTemplate;
use Illuminate\Database\Seeder;

#endregion

class FrontendSeeder extends Seeder
{
    #region PUBLIC METHODS

    public function run()
    {
        MenuService::createMenuItem(FrontendFooterTemplate::DEFAULT);
        MenuService::createMenuItem(FrontendHeaderTemplate::DEFAULT);

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
