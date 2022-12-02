<?php

#region USE

use App\Constants\Tables;
use App\Models\Backend\Language;
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
    }

    public function down()
    {
        Schema::dropIfExists(Tables::TABLE_LANGUAGES);
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

    #endregion
};
