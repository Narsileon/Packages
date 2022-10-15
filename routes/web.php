<?php

#region USE

use App\Http\Controllers\Web\HomeController;
use Illuminate\Support\Facades\Route;

#endregion

Route::get('/', HomeController::class)->name('home');
