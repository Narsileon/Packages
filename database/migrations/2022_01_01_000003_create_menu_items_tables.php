<?php

#region USE

use App\Models\MenuItem;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    private const TABLE_MENU_ITEMS = 'menu_items';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createMenuItemsTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_MENU_ITEMS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createMenuItemsTable()
    {
        Schema::create(self::TABLE_MENU_ITEMS, function (Blueprint $table) {
            $table->id();
            $table->boolean(MenuItem::FIELD_ACTIVE)->default(true);
            $table->string(MenuItem::FIELD_TYPE);
            $table->string(MenuItem::FIELD_ICON);
            $table->string(MenuItem::FIELD_LABEL);
            $table->string(MenuItem::FIELD_URL)->nullable();
            $table->text(MenuItem::FIELD_CHILDREN)->nullable();
            $table->timestamps();
        });
    }

    #endregion
};
