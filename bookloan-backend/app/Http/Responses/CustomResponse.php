<?php

namespace App\Http\Responses;

use Illuminate\Auth\Access\Response;

class CustomResponse extends Response
{
    public static function unauthorized($message = 'This action is unauthorized.')
    {
        return static::make($message, 403);
    }
}
