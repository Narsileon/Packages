<?php

#region USE

use App\Models\UserLocalization;
use App\Models\UserMenu;
use App\Models\UserSetting;
use App\Models\UserTemplates;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    private const TABLE_USER_LOCALIZATIONS = 'user_localizations';
    private const TABLE_USER_MENUS = 'user_menus';
    private const TABLE_USER_SETTINGS = 'user_settings';
    private const TABLE_USER_TEMPLATES = 'user_templates';

    #endregion

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
        Schema::dropIfExists(self::TABLE_USER_LOCALIZATIONS);
        Schema::dropIfExists(self::TABLE_USER_MENUS);
        Schema::dropIfExists(self::TABLE_USER_SETTINGS);
        Schema::dropIfExists(self::TABLE_USER_TEMPLATES);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createUserLocalizationTable()
    {
        Schema::create(self::TABLE_USER_LOCALIZATIONS, function (Blueprint $table) {
            $table->id();
            $table->foreignId(UserLocalization::FIELD_USER_ID)->constrained()->cascadeOnDelete();

            $table->json(UserLocalization::FIELD_DICTIONARY)->nullable();

            $table->timestamps();
        });
    }

    private static function createUserMenusTable()
    {
        Schema::create(self::TABLE_USER_MENUS, function (Blueprint $table) {
            $table->id();
            $table->foreignId(UserMenu::FIELD_USER_ID)->constrained()->cascadeOnDelete();

            $table->boolean(UserMenu::FIELD_ACTIVE)->default(true);
            $table->string(UserMenu::FIELD_CATEGORY);

            $table->string(UserMenu::FIELD_TITLE);
            $table->text(UserMenu::FIELD_TEMPLATE);

            $table->timestamps();
        });
    }

    private static function createUserSettingsTable()
    {
        Schema::create(self::TABLE_USER_SETTINGS, function (Blueprint $table) {
            $table->id();
            $table->foreignId(UserSetting::FIELD_USER_ID)->constrained()->cascadeOnDelete();

            $table->text(UserSetting::FIELD_SETTINGS)->nullable();

            $table->timestamps();
        });
    }

    private static function createUserTemplatesTable()
    {
        Schema::create(self::TABLE_USER_TEMPLATES, function (Blueprint $table) {
            $table->id();
            $table->foreignId(UserTemplates::FIELD_USER_ID)->constrained()->cascadeOnDelete();

            $table->string(UserTemplates::FIELD_TYPE);

            $table->text(UserTemplates::FIELD_TEMPLATE_FAQS)->nullable();
            $table->text(UserTemplates::FIELD_TEMPLATE_LANGUAGES)->nullable();
            $table->text(UserTemplates::FIELD_TEMPLATE_LOCALIZATIONS)->nullable();
            $table->text(UserTemplates::FIELD_TEMPLATE_MENU_ITEMS)->nullable();
            $table->text(UserTemplates::FIELD_TEMPLATE_ORDERS)->nullable();
            $table->text(UserTemplates::FIELD_TEMPLATE_ROLES)->nullable();
            $table->text(UserTemplates::FIELD_TEMPLATE_USERS)->nullable();

            $table->timestamps();
        });
    }

    #endregion
};
