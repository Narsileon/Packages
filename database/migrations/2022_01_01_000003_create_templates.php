<?php

#region USE

use App\Models\Backend\Template;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    const TABLE_TEMPLATES = 'templates';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createTemplateTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_TEMPLATES);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createTemplateTable()
    {
        Schema::create(self::TABLE_TEMPLATES, function (Blueprint $table) {
            $table->id();
            $table->foreignId(Template::FIELD_USER_ID)->constrained()->cascadeOnDelete();
            $table->json(Template::FIELD_TEMPLATE_FAQ)->nullable();
            $table->timestamps();
        });
    }

    #endregion
};
