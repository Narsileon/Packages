<?php

#region USE

use App\Http\Controllers\Frontend\FaqController;
use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Support\Facades\Route;

#endregion

Route::get('/', HomeController::class)->name('home');
Route::get('faq', FaqController::class)->name('faq');
