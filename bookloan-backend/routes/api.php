<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

require_once __DIR__ . "/api/v1.php";

Route::prefix('v1')->group(function () {
    Route::post('login', LoginController::class)->name('login');
    Route::post('logout', LogoutController::class)->name('logout')->middleware('auth:sanctum');
    Route::post('register', RegisterController::class)->name('register');
});
