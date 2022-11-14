<?php

#region USE

use App\Models\Backend\Localization;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        Schema::create('localizations', function (Blueprint $table) {
            $table->id();
            $table->foreignId(Localization::FIELD_USER_ID)->constrained()->cascadeOnDelete();
            $table->json(Localization::FIELD_DICTIONARY)->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('localizations');
    }

    #endregion
};
