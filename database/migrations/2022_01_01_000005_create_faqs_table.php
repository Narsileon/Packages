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
    #region CONSTANTS

    const TABLE_FAQS = 'faqs';
    const TABLE_FAQS_TEMPLATE = 'faq_templates';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createFaqTable();
        self::createTemplateTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_FAQS);
        Schema::dropIfExists(self::TABLE_FAQS_TEMPLATE);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createFaqTable()
    {
        Schema::create(self::TABLE_FAQS, function (Blueprint $table) {
            $table->id();
            $table->longText(Faq::FIELD_QUESTION);
            $table->longText(Faq::FIELD_ANSWER);
            $table->timestamps();
        });
    }

    private static function createTemplateTable()
    {
        Schema::create(self::TABLE_FAQS_TEMPLATE, function (Blueprint $table) {
            $table->id();
            $table->foreignId(FaqTemplate::FIELD_USER_ID)->constrained()->cascadeOnDelete();
            $table->json(FaqTemplate::FIELD_ORDER);
            $table->json(FaqTemplate::FIELD_SORTING);
            $table->timestamps();
        });
    }

    #endregion
};
