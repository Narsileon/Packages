<?php

#region USE

use App\Constants\Tables;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        self::createPasswordResetTable();
    }

    public function down()
    {
        Schema::dropIfExists(Tables::TABLE_PASSWORD_RESETS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createPasswordResetTable()
    {
        Schema::create(Tables::TABLE_PASSWORD_RESETS, function (Blueprint $table)
        {
            $table->string('email')->index();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });
    }

    #endregion
};
