<?php

use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\BookLoanController;

Route::prefix('v1')->group(function () {
    Route::apiResource('/books', BookController::class);

    Route::post('/bookloans/{book}/books', [BookLoanController::class, 'store'])->name('bookloans.store');
    Route::get('/bookloans/{bookloan}/approve', [BookLoanController::class, 'approve'])->name('bookloans.approve');
    Route::post('/bookloans/{bookloan}/reject', [BookLoanController::class, 'reject'])->name('bookloans.reject');
    Route::post('/bookloans/{bookloan}/return', [BookLoanController::class, 'return'])->name('bookloans.return');
    Route::post('/bookloans/{bookloan}/extend/{days}', [BookLoanController::class, 'extend'])->name('bookloans.extend');
});
