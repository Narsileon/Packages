<?php

#region USE

use App\Models\Frontend\Faq;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    private const TABLE_FAQS = 'faqs';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createFaqTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_FAQS);
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

    #endregion
};
