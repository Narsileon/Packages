<?php

#region USE

use App\Constants\Tables;
use App\Models\Backend\Language;
use App\Models\Backend\Localization;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        self::createLanguageTable();
        self::createLocalizationsTable();
    }

    public function down()
    {
        Schema::dropIfExists(Tables::TABLE_LANGUAGES);
        Schema::dropIfExists(Tables::TABLE_LOCALIZATIONS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createLanguageTable()
    {
        Schema::create(Tables::TABLE_LANGUAGES, function (Blueprint $table) {
            $table->id();
            $table->string(Language::FIELD_CODE);
            $table->boolean(Language::FIELD_ACTIVE);
            $table->timestamps();
        });
    }

    private static function createLocalizationsTable()
    {
        Schema::create(Tables::TABLE_LOCALIZATIONS, function (Blueprint $table) {
            $table->id();
            $table->string(Localization::FIELD_CODE)->unique();
            $table->text(Localization::FIELD_LOCALIZATION)->nullable();
            $table->timestamps();
        });
    }

    #endregion
};
