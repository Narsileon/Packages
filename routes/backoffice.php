<?php

#region USE

use App\Http\Controllers\Backoffice\DashboardController;
use App\Http\Controllers\Backoffice\RoleController;
use App\Http\Controllers\Backoffice\UserController;
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

        Route::resource('users', UserController::class);
        Route::resource('roles', RoleController::class);
    }
);
