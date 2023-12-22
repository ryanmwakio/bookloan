<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    $file = public_path('index.html');

    if (File::exists($file)) {
        return response(file_get_contents($file));
    } else {
        abort(404);
    }
})->where('any', '.*');
