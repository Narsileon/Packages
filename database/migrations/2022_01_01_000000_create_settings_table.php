<?php

#region USE

use App\Constants\Tables;
use App\Models\Backend\GeneralSetting;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        self::createGeneralSettingTable();
    }

    public function down()
    {
        Schema::dropIfExists(Tables::TABLE_GENERAL_SETTINGS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createGeneralSettingTable()
    {
        Schema::create(Tables::TABLE_GENERAL_SETTINGS, function (Blueprint $table) {
            $table->id();
            $table->string(GeneralSetting::FIELD_APP_NAME);
            $table->timestamps();
        });
    }

    #endregion
};
