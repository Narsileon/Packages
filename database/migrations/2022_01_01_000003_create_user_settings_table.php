<?php

#region USE

use App\Models\Backend\UserSettings;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    private const TABLE_TEMPLATES = 'user_settings';

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
            $table->foreignId(UserSettings::FIELD_USER_ID)->constrained()->cascadeOnDelete();

            $table->text(UserSettings::FIELD_FAQS)->nullable();
            $table->text(UserSettings::FIELD_FOOTER_LINKS)->nullable();
            $table->text(UserSettings::FIELD_HEADER_LINKS)->nullable();
            $table->text(UserSettings::FIELD_LANGUAGES)->nullable();
            $table->text(UserSettings::FIELD_LOCALIZATIONS)->nullable();
            $table->text(UserSettings::FIELD_ORDERS)->nullable();
            $table->text(UserSettings::FIELD_ROLES)->nullable();
            $table->text(UserSettings::FIELD_USERS)->nullable();

            $table->timestamps();
        });
    }

    #endregion
};
