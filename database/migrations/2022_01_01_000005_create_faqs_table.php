<?php

#region USE

use App\Models\Backend\Templates\FaqTemplate;
use App\Models\Frontend\Faq;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        Schema::create('faqs', function (Blueprint $table) {
            $table->id();
            $table->longText(Faq::FIELD_QUESTION);
            $table->longText(Faq::FIELD_ANSWER);
            $table->timestamps();
        });

        Schema::create('faqs_templates', function (Blueprint $table) {
            $table->id();
            $table->foreignId(FaqTemplate::FIELD_USER_ID)->constrained()->cascadeOnDelete();
            $table->json(FaqTemplate::FIELD_ORDER)->nullable();
            $table->json(FaqTemplate::FIELD_SORTING);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('faqs');
        Schema::dropIfExists('faqs_templates');
    }

    #endregion
};
