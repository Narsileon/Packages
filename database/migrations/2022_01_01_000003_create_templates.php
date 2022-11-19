<?php

#region USE

use App\Models\Backend\Template;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    const TABLE_TEMPLATES = 'templates';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createTemplateTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_TEMPLATES);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createTemplateTable()
    {
        Schema::create(self::TABLE_TEMPLATES, function (Blueprint $table) {
            $table->id();
            $table->foreignId(Template::FIELD_USER_ID)->constrained()->cascadeOnDelete();

            $table->text(Template::FIELD_DICTIONARIES)->nullable();
            $table->text(Template::FIELD_FAQS)->nullable();
            $table->text(Template::FIELD_FOOTER_LINKS)->nullable();
            $table->text(Template::FIELD_HEADER_LINKS)->nullable();
            $table->text(Template::FIELD_LANGUAGES)->nullable();
            $table->text(Template::FIELD_ORDERS)->nullable();
            $table->text(Template::FIELD_ROLES)->nullable();
            $table->text(Template::FIELD_USERS)->nullable();

            $table->timestamps();
        });
    }

    #endregion
};
