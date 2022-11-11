<?php

#region USE

use App\Http\Controllers\Backoffice\CalendarController;
use App\Http\Controllers\Backoffice\DashboardController;
use App\Http\Controllers\Backoffice\DictionaryController;
use App\Http\Controllers\Backoffice\FaqController;
use App\Http\Controllers\Backoffice\FooterLinkController;
use App\Http\Controllers\Backoffice\HeaderLinkController;
use App\Http\Controllers\Backoffice\LocaleController;
use App\Http\Controllers\Backoffice\OrderController;
use App\Http\Controllers\Backoffice\RoleController;
use App\Http\Controllers\Backoffice\UserController;
use Illuminate\Support\Facades\Route;

#endregion

Route::group([
    'prefix' => 'backoffice',
    'as' => 'backoffice.',
    'middleware' => 'auth',
], function () {
    // Management
    Route::resource('users', UserController::class);
    Route::resource('roles', RoleController::class);

    Route::controller(LocaleController::class)->group(function () {
        Route::get('languages', 'index')->name('languages');
        Route::patch('languages', 'update');
    });

    // Backoffice
    Route::get('dashboard', DashboardController::class)->name('dashboard');
    Route::get('calendar', CalendarController::class)->name('calendar');
    Route::resource('orders', OrderController::class);
    Route::get('dictionary', DictionaryController::class)->name('dictionary');

    // Web
    Route::resource('header_links', HeaderLinkController::class);
    Route::resource('footer_links', FooterLinkController::class);
    Route::resource('faqs', FaqController::class);
});
