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
        self::createPersonalAccessTokenTable();
    }

    public function down()
    {
        Schema::dropIfExists(Tables::TABLE_PERSONAL_ACCESS_TOKENS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createPersonalAccessTokenTable()
    {
        Schema::create(Tables::TABLE_PERSONAL_ACCESS_TOKENS, function (Blueprint $table)
        {
            $table->id();
            $table->morphs('tokenable');
            $table->string('name');
            $table->string('token', 64)->unique();
            $table->text('abilities')->nullable();
            $table->timestamp('last_used_at')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
        });
    }

    #endregion
};
