<?php

#region USE

use App\Constants\Tables;
use App\Models\UserLocalization;
use App\Models\UserMenu;
use App\Models\UserSetting;
use App\Models\UserTemplate;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        self::createUserLocalizationTable();
        self::createUserMenusTable();
        self::createUserSettingsTable();
        self::createUserTemplatesTable();
    }

    public function down()
    {
        Schema::dropIfExists(Tables::TABLE_USER_LOCALIZATIONS);
        Schema::dropIfExists(Tables::TABLE_USER_MENUS);
        Schema::dropIfExists(Tables::TABLE_USER_SETTINGS);
        Schema::dropIfExists(Tables::TABLE_USER_TEMPLATES);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createUserLocalizationTable()
    {
        Schema::create(Tables::TABLE_USER_LOCALIZATIONS, function (Blueprint $table) {
            $table->id();
            $table->foreignId(UserLocalization::FIELD_USER_ID)->constrained()->cascadeOnDelete();

            $table->json(UserLocalization::FIELD_DICTIONARY)->nullable();

            $table->timestamps();
        });
    }

    private static function createUserMenusTable()
    {
        Schema::create(Tables::TABLE_USER_MENUS, function (Blueprint $table) {
            $table->id();
            $table->foreignId(UserMenu::FIELD_USER_ID)->constrained()->cascadeOnDelete();

            $table->boolean(UserMenu::FIELD_ACTIVE)->default(true);
            $table->string(UserMenu::FIELD_TYPE);

            $table->string(UserMenu::FIELD_TITLE);
            $table->text(UserMenu::FIELD_TEMPLATE);

            $table->timestamps();
        });
    }

    private static function createUserSettingsTable()
    {
        Schema::create(Tables::TABLE_USER_SETTINGS, function (Blueprint $table) {
            $table->id();
            $table->foreignId(UserSetting::FIELD_USER_ID)->constrained()->cascadeOnDelete();

            $table->text(UserSetting::FIELD_SETTINGS)->nullable();

            $table->timestamps();
        });
    }

    private static function createUserTemplatesTable()
    {
        Schema::create(Tables::TABLE_USER_TEMPLATES, function (Blueprint $table) {
            $table->id();
            $table->foreignId(UserTemplate::FIELD_USER_ID)->constrained()->cascadeOnDelete();

            $table->string(UserTemplate::FIELD_CATEGORY);
            $table->string(UserTemplate::FIELD_TYPE);
            $table->text(UserTemplate::FIELD_TEMPLATE)->nullable();

            $table->timestamps();
        });
    }

    #endregion
};
