<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function index()
    {
        $this->authorize('admin', User::class);

        return response()->json([
            'success' => true,
            'message' => 'All users retrieved successfully',
            'status' => 200,
            'data' => UserResource::collection(User::all()),
        ]);
    }

    public function makeUserAdmin(User $user)
    {
        $this->authorize('admin', User::class);

        $user->makeAdmin();

        return response()->json([
            'success' => true,
            'message' => 'User admin status updated successfully',
            'status' => 200,
            'data' => new UserResource($user),
        ]);
    }

    public function removeUserAdmin(User $user)
    {
        $this->authorize('admin', User::class);

        $user->removeAdmin();

        return response()->json([
            'success' => true,
            'message' => 'User admin status removed successfully',
            'status' => 200,
            'data' => new UserResource($user),
        ]);
    }
}
