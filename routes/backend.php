<?php

#region USE

use App\Acl\Permissions;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\Backoffice\CalendarController;
use App\Http\Controllers\Backend\Backoffice\OrderController;
use App\Http\Controllers\Backend\Frontoffice\FaqController;
use App\Http\Controllers\Backend\Management\MenuItemController;
use App\Http\Controllers\Backend\Management\RoleController;
use App\Http\Controllers\Backend\Management\UserController;
use App\Http\Controllers\Backend\Settings\GeneralSettingsController;
use App\Http\Controllers\Backend\Settings\LanguageController;
use App\Http\Controllers\Backend\Settings\UserLocalizationController;
use App\Http\Controllers\Backend\Settings\UserMenuController;
use App\Http\Controllers\Backend\Settings\UserTemplateController;
use Illuminate\Support\Facades\Route;

#endregion

Route::group([
    'prefix' => 'admin',
    'as' => 'admin.',
    'middleware' => 'can:' . Permissions::BACKEND_VIEW,
], function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');

    // Management
    Route::resource('menu_items', MenuItemController::class);
    Route::resource('roles', RoleController::class);
    Route::resource('users', UserController::class);

    // Back office
    Route::get('calendar', CalendarController::class)->name('calendar');
    Route::resource('orders', OrderController::class);

    // Front office
    Route::resource('faqs', FaqController::class);

    // Settings
    Route::controller(GeneralSettingsController::class)->group(function () {
        Route::get('general_settings', 'index')->name('general_settings');
        Route::patch('general_settings/{general_setting}', 'update');
    });
    Route::controller(LanguageController::class)->group(function () {
        Route::get('languages', 'index')->name('languages');
        Route::patch('languages', 'update');
    });
    Route::controller(UserLocalizationController::class)->group(function () {
        Route::get('user_localizations', 'index')->name('user_localizations.index');
        Route::patch('user_localizations/{localization}', 'update')->name('user_localizations.update');
    });
    Route::controller(UserMenuController::class)->group(function () {
        Route::get('user_menus', 'index')->name('user_menus.index');
        Route::post('user_menus', 'store')->name('user_menus.store');
        Route::patch('user_menus/{user_menu}', 'update')->name('user_menus.update');
    });
    Route::controller(UserTemplateController::class)->group(function () {
        Route::get('user_templates', 'index')->name('user_templates.index');
        Route::patch('user_templates', 'update')->name('user_templates.update');
    });
});
