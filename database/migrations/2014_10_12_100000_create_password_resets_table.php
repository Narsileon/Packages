<?php

#region USE

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    const TABLE_PASSWORD_RESETS = 'password_resets';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createPasswordResetTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_PASSWORD_RESETS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createPasswordResetTable()
    {
        Schema::create(self::TABLE_PASSWORD_RESETS, function (Blueprint $table)
        {
            $table->string('email')->index();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });
    }

    #endregion
};
