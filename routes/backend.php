<?php

#region USE

use App\Acl\Permissions;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\ProfileController;
use App\Http\Controllers\Backend\Backoffice\CalendarController;
use App\Http\Controllers\Backend\Backoffice\OrderController;
use App\Http\Controllers\Backend\Frontoffice\FaqController;
use App\Http\Controllers\Backend\Management\MenuItemController;
use App\Http\Controllers\Backend\Management\RoleController;
use App\Http\Controllers\Backend\Management\UserController;
use App\Http\Controllers\Backend\Settings\GeneralSettingsController;
use App\Http\Controllers\Backend\Settings\LanguageController;
use App\Http\Controllers\Backend\Settings\LocalizationController;
use App\Http\Controllers\Backend\Settings\TemplateController;
use App\Http\Controllers\Backend\Settings\MenuController;
use App\Http\Controllers\Backend\Settings\UserTemplates\LoadUserTemplateController;
use App\Http\Controllers\Backend\Settings\UserTemplates\ResetUserTemplateController;
use App\Http\Controllers\Backend\Settings\UserTemplates\SaveUserTemplateController;
use App\Http\Controllers\Backend\Settings\UserTemplates\UpdateUserTemplateController;
use App\Http\Controllers\Backend\UserSettingsController;
use Illuminate\Support\Facades\Route;

#endregion

Route::group([
    'prefix' => 'admin',
    'as' => 'admin.',
    'middleware' => 'can:' . Permissions::BACKEND_VIEW,
], function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');

    Route::controller(ProfileController::class)->group(function () {
        Route::get('profiles', 'index')->name('profile.index');
        Route::get('profiles/{profile}', 'update')->name('profile.update');
    });

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
        Route::get('general_settings', 'index')->name('general_settings.index');
        Route::patch('general_settings/{general_setting}', 'update')->name('general_settings.update');
    });
    Route::controller(LanguageController::class)->group(function () {
        Route::get('languages', 'index')->name('languages.index');
        Route::patch('languages', 'update')->name('languages.update');
    });
    Route::controller(LocalizationController::class)->group(function () {
        Route::get('localizations', 'index')->name('localizations.index');
        Route::patch('localizations/{localization}', 'update')->name('localizations.update');
    });
    Route::controller(MenuController::class)->group(function () {
        Route::get('menus', 'index')->name('menus.index');
        Route::post('menus', 'store')->name('menus.store');
        Route::patch('menus/{menu}', 'update')->name('menus.update');
        Route::patch('menus/{menu}/duplicate', 'duplicate')->name('menus.duplicate');
    });
    Route::controller(TemplateController::class)->group(function () {
        Route::get('templates', 'index')->name('templates.index');
        Route::patch('templates/{template}', 'update')->name('templates.update');
        Route::delete('templates/{template}', 'destroy')->name('templates.destroy');
    });
    Route::patch('user_templates/{user_template}/load', LoadUserTemplateController::class)->name('user_templates.load');
    Route::patch('user_templates/{user_template}/reset', ResetUserTemplateController::class)->name('user_templates.reset');
    Route::patch('user_templates/{user_template}/save', SaveUserTemplateController::class)->name('user_templates.save');
    Route::patch('user_templates/{user_template}/update', UpdateUserTemplateController::class)->name('user_templates.update');
});
