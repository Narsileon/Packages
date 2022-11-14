<?php

#region USE

use App\Models\Backend\Language;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        Schema::create('languages', function (Blueprint $table) {
            $table->id();
            $table->string(Language::FIELD_LOCALE);
            $table->boolean(Language::FIELD_ACTIVE);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('languages');
    }

    #endregion
};
