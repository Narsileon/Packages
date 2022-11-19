<?php

#region USE

use App\Models\Frontend\FooterLink;
use App\Models\Frontend\HeaderLink;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    private const TABLE_HEADER_LINKS = 'header_links';
    private const TABLE_FOOTER_LINKS = 'footer_links';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createHeaderLinkTable();
        self::createFooterLinkTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_HEADER_LINKS);
        Schema::dropIfExists(self::TABLE_FOOTER_LINKS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createHeaderLinkTable()
    {
        Schema::create(self::TABLE_HEADER_LINKS, function (Blueprint $table) {
            $table->id();
            $table->string(HeaderLink::FIELD_LABEL);
            $table->string(HeaderLink::FIELD_URL);
            $table->boolean(HeaderLink::FIELD_ACTIVE);
            $table->timestamps();
        });
    }

    private static function createFooterLinkTable()
    {
        Schema::create(self::TABLE_FOOTER_LINKS, function (Blueprint $table) {
            $table->id();
            $table->string(FooterLink::FIELD_LABEL);
            $table->string(FooterLink::FIELD_URL);
            $table->boolean(FooterLink::FIELD_ACTIVE);
            $table->timestamps();
        });
    }

    #endregion
};
