<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::prefix('auth')->group(function () {
//     Route::post('login', LoginController::class)->name('login');
//     Route::post('logout', LogoutController::class)->name('logout')->middleware('auth:sanctum');
//     Route::post('register', RegisterController::class)->name('register');
// });

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
