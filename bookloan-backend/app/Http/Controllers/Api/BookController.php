<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookRequest;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class BookController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:sanctum')->except(['index', 'show']);
    // }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $perPage = request()->get('per_page', 10);
        $page = request()->get('page', 1);
        return BookResource::collection(Book::paginate($perPage, ['*'], 'page', $page));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        try {

            $image_path = "";
            if ($request->hasFile('image')) {
                $file = $request->file('image');

                $imagePath = $file->store('books', 'public');

                //Storage::disk('public')->url($imagePath); // full url with domain
                $image_path = $imagePath;
            }

            $book = $request->user()->books()->create([
                'name' => $request->name,
                'publisher' => $request->publisher,
                'isbn' => $request->isbn,
                'category' => $request->category,
                'sub_category' => $request->sub_category,
                'description' => $request->description,
                'pages' => $request->pages,
                'image' => $image_path,
            ]);
            return response()->json([
                'success' => true,
                'message' => 'Book created successfully',
                'status' => 201,
                'data' => BookResource::make($book),
            ], 201);
        } catch (\Exception $e) {
            Log::error($e->getMessage());

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'status' => 500,
            ], 500);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }
}
