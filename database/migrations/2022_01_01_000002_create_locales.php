<?php

#region USE

use App\Models\Session\Locale;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        Schema::create('locales', function (Blueprint $table) {
            $table->id();
            $table->string(Locale::FIELD_LOCALE);
            $table->boolean(Locale::FIELD_ACTIVE);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('locales');
    }

    #endregion
};