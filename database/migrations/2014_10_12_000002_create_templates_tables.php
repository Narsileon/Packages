<?php

#region USE

use App\Constants\Tables;
use App\Models\Template;
use App\Models\UserTemplate;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    public function up()
    {
        self::createTemplatesTable();
        self::createUserTemplatesTable();
    }

    public function down()
    {
        Schema::dropIfExists(Tables::TABLE_TEMPLATES);
        Schema::dropIfExists(Tables::TABLE_USER_TEMPLATES);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createTemplatesTable()
    {
        Schema::create(Tables::TABLE_TEMPLATES, function (Blueprint $table) {
            $table->id();

            $table->string(Template::FIELD_TYPE);
            $table->text(Template::FIELD_TEMPLATE)->nullable();

            $table->timestamps();
        });
    }

    private static function createUserTemplatesTable()
    {
        Schema::create(Tables::TABLE_USER_TEMPLATES, function (Blueprint $table) {
            $table->id();
            $table->foreignId(UserTemplate::FIELD_USER_ID)->constrained()->cascadeOnDelete();

            $table->string(UserTemplate::FIELD_TYPE);
            $table->text(UserTemplate::FIELD_DEFAULT)->nullable();
            $table->text(UserTemplate::FIELD_CUSTOM)->nullable();

            $table->timestamps();
        });
    }

    #endregion
};
