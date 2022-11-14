<?php

#region USE

use App\Http\Controllers\Backoffice\CalendarController;
use App\Http\Controllers\Backoffice\DashboardController;
use App\Http\Controllers\Backoffice\DictionaryController;
use App\Http\Controllers\Backoffice\FaqController;
use App\Http\Controllers\Backoffice\FooterLinkController;
use App\Http\Controllers\Backoffice\HeaderLinkController;
use App\Http\Controllers\Backoffice\LanguageController;
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
    Route::get('dashboard', DashboardController::class)->name('dashboard');

    // Management
    Route::resource('users', UserController::class);
    Route::resource('roles', RoleController::class);

    // Backoffice
    Route::get('calendar', CalendarController::class)->name('calendar');
    Route::resource('orders', OrderController::class);

    // Web
    Route::resource('header_links', HeaderLinkController::class);
    Route::resource('footer_links', FooterLinkController::class);
    Route::resource('faqs', FaqController::class);

    // Settings
    Route::controller(LanguageController::class)->group(function () {
        Route::get('languages', 'index')->name('languages');
        Route::patch('languages', 'update');
    });
    Route::controller(DictionaryController::class)->group(function () {
        Route::get('dictionary', 'index')->name('dictionary');
        Route::patch('dictionary', 'update');
    });
});
