<?php

#region USE

use App\Http\Controllers\Backend\UserSettingsController;
use App\Http\Controllers\Session\LocaleController;
use App\Http\Controllers\Session\LoginController;
use App\Http\Controllers\Session\LogoutController;
use App\Http\Controllers\Session\RegisterController;
use Illuminate\Support\Facades\Route;

#endregion


Route::controller(RegisterController::class)->middleware('guest')->group(function () {
    Route::get('register', 'create')->name('register');
    Route::post('register', 'store');
});

Route::controller(LoginController::class)->middleware('guest')->group(function () {
    Route::get('login', 'create')->name('login');
    Route::post('login', 'store');
});

Route::controller(UserSettingsController::class)->middleware('auth')->group(function () {
    Route::patch('userSettings/{userSetting}', 'update')->name('userSettings.update');
});

Route::get('locales/{locale}', LocaleController::class)->name('locale');

Route::post('logout', LogoutController::class)->name('logout');
