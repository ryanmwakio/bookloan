<?php

use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\BookLoanController;

Route::prefix('v1')->group(function () {
    Route::apiResource('/books', BookController::class);

    Route::post('/bookloans/{book}/books', [BookLoanController::class, 'store'])->name('bookloans.store');
    Route::get('/bookloans/{bookloan}/approve', [BookLoanController::class, 'approve'])->name('bookloans.approve');
});
