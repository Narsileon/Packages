<?php

#region USE

use App\Acl\Permissions;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\ProfileController;
use App\Http\Controllers\Backend\CalendarController;
use App\Http\Controllers\Backend\Backoffice\OrderController;
use App\Http\Controllers\Backend\Frontoffice\FaqController;
use App\Http\Controllers\Backend\Management\MenuController;
use App\Http\Controllers\Backend\Management\MenuItemController;
use App\Http\Controllers\Backend\Management\RoleController;
use App\Http\Controllers\Backend\Management\UserController;
use App\Http\Controllers\Backend\Settings\GeneralSettingController;
use App\Http\Controllers\Backend\Settings\LanguageController;
use App\Http\Controllers\Backend\Settings\LocalizationController;
use App\Http\Controllers\Backend\Settings\TemplateController;
use App\Http\Controllers\Backend\Settings\UserTemplateController;
use Illuminate\Support\Facades\Route;

#endregion

Route::group([
    'prefix' => 'admin',
    'as' => 'admin.',
    'middleware' => 'can:' . Permissions::BACKEND_VIEW,
], function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
    Route::get('calendar', CalendarController::class)->name('calendar');

    Route::controller(ProfileController::class)->group(function () {
        Route::get('profiles', 'index')->name('profile.index');
        Route::get('profiles/{profile}', 'update')->name('profile.update');
    });

    // Management
    Route::controller(MenuController::class)->group(function () {
        Route::get('menus', 'index')->name('menus.index');
        Route::post('menus', 'store')->name('menus.store');
        Route::patch('menus/{menu}', 'update')->name('menus.update');
        Route::patch('menus/{menu}/duplicate', 'duplicate')->name('menus.duplicate');
    });
    Route::resource('menuItems', MenuItemController::class);
    Route::resource('roles', RoleController::class);
    Route::resource('users', UserController::class);

    // Back office
    Route::resource('orders', OrderController::class);

    // Front office
    Route::resource('faqs', FaqController::class);

    // Settings
    Route::controller(GeneralSettingController::class)->group(function () {
        Route::get('generalSettings', 'index')->name('generalSettings.index');
        Route::patch('generalSettings/{generalSetting}', 'update')->name('generalSettings.update');
    });
    Route::controller(LanguageController::class)->group(function () {
        Route::get('languages', 'index')->name('languages.index');
        Route::patch('languages', 'update')->name('languages.update');
    });
    Route::controller(LocalizationController::class)->group(function () {
        Route::get('localizations', 'index')->name('localizations.index');
        Route::patch('localizations/{localization}', 'update')->name('localizations.update');
    });
    Route::controller(TemplateController::class)->group(function () {
        Route::get('templates', 'index')->name('templates.index');
        Route::patch('templates/{template}', 'update')->name('templates.update');
        Route::delete('templates/{template}', 'destroy')->name('templates.destroy');
    });
    Route::controller(UserTemplateController::class)->group(function () {
        Route::patch('userTemplates/{userTemplate}/load', 'load')->name('userTemplates.load');
        Route::patch('userTemplates/{userTemplate}/reset', 'reset')->name('userTemplates.reset');
        Route::patch('userTemplates/{userTemplate}/save', 'save')->name('userTemplates.save');
        Route::patch('userTemplates/{userTemplate}/update', 'update')->name('userTemplates.update');
    });
});
