<?php

use App\Http\Controllers\Api\BookController;

Route::prefix('v1')->group(function () {
    Route::apiResource('/books', BookController::class);
});
