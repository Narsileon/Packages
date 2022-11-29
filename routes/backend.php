<?php

#region USE

use App\Acl\Permissions;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\Backoffice\CalendarController;
use App\Http\Controllers\Backend\Backoffice\OrderController;
use App\Http\Controllers\Backend\Frontoffice\FaqController;
use App\Http\Controllers\Backend\Frontoffice\FooterLinkController;
use App\Http\Controllers\Backend\Frontoffice\HeaderLinkController;
use App\Http\Controllers\Backend\Management\RoleController;
use App\Http\Controllers\Backend\Management\UserController;
use App\Http\Controllers\Backend\Settings\GeneralSettingsController;
use App\Http\Controllers\Backend\Settings\LanguageController;
use App\Http\Controllers\Backend\Settings\LocalizationController;
use App\Http\Controllers\Backend\Settings\MenuController;
use App\Http\Controllers\Backend\Settings\MenuItemController;
use App\Http\Controllers\Backend\Settings\TemplateController;
use Illuminate\Support\Facades\Route;

#endregion

Route::group([
    'prefix' => 'admin',
    'as' => 'admin.',
    'middleware' => 'can:' . Permissions::BACKEND_VIEW,
], function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');

    // Management
    Route::resource('users', UserController::class);
    Route::resource('roles', RoleController::class);

    // Back office
    Route::get('calendar', CalendarController::class)->name('calendar');
    Route::resource('orders', OrderController::class);

    // Front office
    Route::resource('header_links', HeaderLinkController::class);
    Route::resource('footer_links', FooterLinkController::class);
    Route::resource('faqs', FaqController::class);

    // Settings
    Route::controller(GeneralSettingsController::class)->group(function () {
        Route::get('general_settings', 'index')->name('general_settings');
        Route::patch('general_settings/{general_setting}', 'update');
    });
    Route::controller(MenuController::class)->group(function () {
        Route::get('menus', 'index')->name('menus');
        Route::patch('menus/{menu}', 'update');
    });
    Route::controller(MenuItemController::class)->group(function () {
        Route::get('menu_items', 'store')->name('menu_items');
        Route::patch('menu_items/{menu_item}', 'update');
    });
    Route::controller(TemplateController::class)->group(function () {
        Route::get('templates', 'index')->name('templates');
        Route::patch('templates', 'update');
    });
    Route::controller(LanguageController::class)->group(function () {
        Route::get('languages', 'index')->name('languages');
        Route::patch('languages', 'update');
    });
    Route::controller(LocalizationController::class)->group(function () {
        Route::get('dictionary', 'index')->name('dictionary.index');
        Route::patch('dictionary/{localization}', 'update')->name('dictionary.update');
    });
});
