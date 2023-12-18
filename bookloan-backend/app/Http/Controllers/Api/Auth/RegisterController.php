<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class RegisterController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(RegisterRequest $request)
    {
        try {
            $user = User::create($request->getData());

            return response()->json([
                'successful' => true,
                "message" => "User created successfully",
                'user' => $user,
                'token' => $user->createToken('laravel_api_token')->plainTextToken,
            ]);
        } catch (\Exception $e) {

            Log::error($e->getMessage());

            return response()->json([
                'successful' => false,
                "message" => $e->getMessage(),
            ]);
        }

    }
}