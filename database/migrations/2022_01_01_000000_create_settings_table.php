<?php

#region USE

use App\Constants\Tables;
use App\Models\Backend\GeneralSettings;
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
        self::createGeneralSettingsTable();
        self::createLocalizationsTable();
    }

    public function down()
    {
        Schema::dropIfExists(Tables::TABLE_GENERAL_SETTINGS);
        Schema::dropIfExists(Tables::TABLE_LOCALIZATIONS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createLocalizationsTable()
    {
        Schema::create(Tables::TABLE_LOCALIZATIONS, function (Blueprint $table) {
            $table->id();
            $table->string(Localization::FIELD_CODE)->unique();
            $table->text(Localization::FIELD_LOCALIZATION)->nullable();
            $table->timestamps();
        });
    }

    private static function createGeneralSettingsTable()
    {
        Schema::create(Tables::TABLE_GENERAL_SETTINGS, function (Blueprint $table) {
            $table->id();
            $table->string(GeneralSettings::FIELD_APP_NAME);
            $table->timestamps();
        });
    }

    #endregion
};
