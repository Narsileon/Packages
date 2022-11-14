<?php

#region USE

use App\Models\Backoffice\Localization;
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
            $table->string(Localization::FIELD_KEY)->unique();
            $table->boolean(Localization::FIELD_VALUE)->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('localizations');
    }

    #endregion
};
