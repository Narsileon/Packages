<?php

#region USE

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        Schema::create('users', function (Blueprint $table)
        {
            $table->id();
            $table->string(User::FIELD_USERNAME)->unique();
            $table->string(User::FIELD_EMAIL)->unique();
            $table->timestamp(User::FIELD_EMAIL_VERIFIED_AT)->nullable();
            $table->string(User::FIELD_PASSWORD);
            $table->string(User::FIELD_LAST_NAME);
            $table->string(User::FIELD_FIRST_NAME);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }

    #endregion
};
