<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(LoginRequest $request)
    {
        try {
            $user = User::where("email", $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    "email" => ['The credentials you entered are incorrect.'],
                ]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Login successfully',
                'user' => $user,
                'token' => $user->createToken('laravel_api_token')->plainTextToken,
                "status" => 200,
            ]);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());

            return response()->json([
                'success' => false,
                'message' => $th->getMessage(),
                'status' => 500,
            ]);
        }

    }
}
