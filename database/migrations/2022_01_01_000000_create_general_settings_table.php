<?php

#region USE

use App\Models\Backend\GeneralSettings;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    private const TABLE_SETTINGS = 'general_settings';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createSettingsTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_SETTINGS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createSettingsTable()
    {
        Schema::create(self::TABLE_SETTINGS, function (Blueprint $table) {
            $table->id();
            $table->string(GeneralSettings::FIELD_APP_NAME);
            $table->timestamps();
        });
    }

    #endregion
};
