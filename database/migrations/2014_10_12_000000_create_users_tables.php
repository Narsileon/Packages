<?php

#region USE

use App\Constants\Tables;
use App\Models\User;
use App\Models\UserSetting;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        self::createUserTable();
        self::createUserSettingsTable();
    }

    public function down()
    {
        Schema::dropIfExists(Tables::TABLE_USERS);
        Schema::dropIfExists(Tables::TABLE_USER_SETTINGS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createUserTable()
    {
        Schema::create(Tables::TABLE_USERS, function (Blueprint $table)
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

    private static function createUserSettingsTable()
    {
        Schema::create(Tables::TABLE_USER_SETTINGS, function (Blueprint $table) {
            $table->id();
            $table->foreignId(UserSetting::FIELD_USER_ID)->constrained()->cascadeOnDelete();

            $table->string(UserSetting::FIELD_LANGUAGE)->default('en');
            $table->boolean(UserSetting::FIELD_DARK)->default(true);

            $table->timestamps();
        });
    }

    #endregion
};
