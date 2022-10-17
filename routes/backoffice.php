<?php

#region USE

use App\Http\Controllers\Backoffice\DashboardController;
use Illuminate\Support\Facades\Route;

#endregion

Route::group(
    [
        'prefix' => 'backoffice',
        'as' => 'backoffice.',
        'middleware' => 'auth',
    ], 
    function () 
    {
        Route::get('dashboard', DashboardController::class)->name('dashboard');
    }
);
