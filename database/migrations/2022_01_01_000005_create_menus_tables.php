<?php

#region USE

use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    private const TABLE_MENUS = 'menus';
    private const TABLE_MENU_ITEMS = 'menu_items';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createMenuTable();
        self::createMenuItemTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_MENUS);
        Schema::dropIfExists(self::TABLE_MENU_ITEMS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createMenuTable()
    {
        Schema::create(self::TABLE_MENUS, function (Blueprint $table) {
            $table->id();
            $table->string(Menu::FIELD_TITLE);
            $table->text(Menu::FIELD_TEMPLATE);
            $table->timestamps();
        });
    }

    private static function createMenuItemTable()
    {
        Schema::create(self::TABLE_MENU_ITEMS, function (Blueprint $table) {
            $table->id();
            $table->string(MenuItem::FIELD_TYPE);
            $table->string(MenuItem::FIELD_ICON);
            $table->string(MenuItem::FIELD_LABEL);
            $table->string(MenuItem::FIELD_URL)->nullable();
            $table->timestamps();
        });
    }

    #endregion
};
