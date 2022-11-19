<?php

#region USE

use App\Models\Backend\Language;
use App\Models\Backend\Localization;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    private const TABLE_LANGUAGES = 'languages';
    private const TABLE_LOCALIZATIONS = 'localizations';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createLanguageTable();
        self::createLocalizationTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_LANGUAGES);
        Schema::dropIfExists(self::TABLE_LOCALIZATIONS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createLanguageTable()
    {
        Schema::create(self::TABLE_LANGUAGES, function (Blueprint $table) {
            $table->id();
            $table->string(Language::FIELD_CODE);
            $table->boolean(Language::FIELD_ACTIVE);
            $table->timestamps();
        });
    }

    private static function createLocalizationTable()
    {
        Schema::create(self::TABLE_LOCALIZATIONS, function (Blueprint $table) {
            $table->id();
            $table->foreignId(Localization::FIELD_USER_ID)->constrained()->cascadeOnDelete();
            $table->json(Localization::FIELD_DICTIONARY)->nullable();
            $table->timestamps();
        });
    }

    #endregion
};
