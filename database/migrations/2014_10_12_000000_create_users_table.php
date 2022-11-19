<?php

#region USE

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    private const TABLE_USERS = 'users';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createUserTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_USERS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createUserTable()
    {
        Schema::create(self::TABLE_USERS, function (Blueprint $table)
        {
            $table->id();
            $table->string(User::FIELD_USERNAME)->unique();
            $table->string(User::FIELD_EMAIL)->unique();
            $table->timestamp(User::FIELD_EMAIL_VERIFIED_AT)->nullable();
            $table->string(User::FIELD_PASSWORD);
            $table->string(User::FIELD_LAST_NAME);
            $table->string(User::FIELD_FIRST_NAME);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    #endregion
};
