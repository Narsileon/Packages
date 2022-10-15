<?php

#region USE

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
