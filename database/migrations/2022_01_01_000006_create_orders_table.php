<?php

#region USE

use App\Models\Backend\Order;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    const TABLE_ORDERS = 'orders';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createOrderTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_ORDERS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createOrderTable()
    {
        Schema::create(self::TABLE_ORDERS, function (Blueprint $table) {
            $table->id();
            $table->string(Order::FIELD_TYPE);
            $table->string(Order::FIELD_STATUS);
            $table->integer(Order::FIELD_ORDER_NUMBER);
            $table->date(Order::FIELD_ORDER_DATE);
            $table->date(Order::FIELD_START_DATE);
            $table->date(Order::FIELD_END_DATE);
            $table->string(Order::FIELD_START_LOCATION);
            $table->string(Order::FIELD_END_LOCATION);
            $table->string(Order::FIELD_PAYMENT_METHOD);
            $table->timestamps();
        });
    }

    #endregion
};
