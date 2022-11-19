<?php

#region USE

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

#endregion

return new class extends Migration
{
    #region CONSTANTS

    private const TABLE_FAILED_JOBS = 'failed_jobs';

    #endregion

    #region PUBLIC METHODS

    public function up()
    {
        self::createFailedJobTable();
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_FAILED_JOBS);
    }

    #endregion

    #region PRIVATE METHODS

    private static function createFailedJobTable()
    {
        Schema::create(self::TABLE_FAILED_JOBS, function (Blueprint $table)
        {
            $table->id();
            $table->string('uuid')->unique();
            $table->text('connection');
            $table->text('queue');
            $table->longText('payload');
            $table->longText('exception');
            $table->timestamp('failed_at')->useCurrent();
        });
    }

    #endregion
};
