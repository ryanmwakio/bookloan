<?php

use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\BookLoanController;
use App\Http\Controllers\Api\UserController;

Route::prefix('v1')->group(function () {
    Route::apiResource('/books', BookController::class);

    Route::post('/bookloans/{book}/books', [BookLoanController::class, 'store']);
    Route::get('/bookloans/books/unapproved', [BookLoanController::class, 'unapproved']);
    Route::post('/bookloans/{bookloan}/approve', [BookLoanController::class, 'approve']);
    Route::post('/bookloans/{bookloan}/reject', [BookLoanController::class, 'reject']);
    Route::post('/bookloans/{bookloan}/return', [BookLoanController::class, 'return']);
    Route::post('/bookloans/{bookloan}/terminate', [BookLoanController::class, 'terminate']);
    Route::post('/bookloans/{bookloan}/extend/{days}', [BookLoanController::class, 'extend']);

    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users/{user}/makeadmin', [UserController::class, 'makeUserAdmin']);
    Route::post('/users/{user}/removeadmin', [UserController::class, 'removeUserAdmin']);
    Route::delete('/users/{user}', [UserController::class, 'destroy']);
});
