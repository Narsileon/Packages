<?php

#region USE

use App\Constants\Tables;
use App\Models\Backend\Order;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        self::createOrderTable();
    }

    public function down()
    {
        Schema::dropIfExists(Tables::TABLE_ORDERS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createOrderTable()
    {
        Schema::create(Tables::TABLE_ORDERS, function (Blueprint $table) {
            $table->id();
            $table->string(Order::FIELD_TYPE);
            $table->string(Order::FIELD_STATUS);
            $table->integer(Order::FIELD_ORDER_NUMBER);
            $table->date(Order::FIELD_ORDER_DATE);
            $table->date(Order::FIELD_START_DATE);
            $table->date(Order::FIELD_END_DATE);
            $table->string(Order::FIELD_LOCATION_DEPARTURE);
            $table->string(Order::FIELD_LOCATION_ARRIVAL);
            $table->string(Order::FIELD_PAYMENT_METHOD);
            $table->timestamps();
        });
    }

    #endregion
};
