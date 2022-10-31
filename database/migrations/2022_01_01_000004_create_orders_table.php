<?php

#region USE

use App\Models\Backoffice\Order;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string(Order::FIELD_TYPE);
            $table->string(Order::FIELD_STATUS);
            $table->integer(Order::FIELD_ORDER_NUMMER);
            $table->date(Order::FIELD_ORDER_DATE);
            $table->date(Order::FIELD_START_DATE);
            $table->date(Order::FIELD_END_DATE);
            $table->string(Order::FIELD_START_LOCATION);
            $table->string(Order::FIELD_END_LOCATION);
            $table->string(Order::FIELD_PAYMENT_METHOD);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
