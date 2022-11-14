<?php

#region USE

use App\Models\Frontend\FooterLink;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        Schema::create('header_links', function (Blueprint $table) {
            $table->id();
            $table->string(FooterLink::FIELD_LABEL);
            $table->string(FooterLink::FIELD_URL);
            $table->boolean(FooterLink::FIELD_ACTIVE);
            $table->timestamps();
        });

        Schema::create('footer_links', function (Blueprint $table) {
            $table->id();
            $table->string(FooterLink::FIELD_LABEL);
            $table->string(FooterLink::FIELD_URL);
            $table->boolean(FooterLink::FIELD_ACTIVE);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('header_links');
        Schema::dropIfExists('footer_links');
    }

    #endregion
};
