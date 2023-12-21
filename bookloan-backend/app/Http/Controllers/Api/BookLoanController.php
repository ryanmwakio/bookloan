<?php

namespace App\Http\Controllers\Api;

use App\Enums\LoanStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookLoanRequest;
use App\Http\Resources\BookLoanResource;
use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Models\BookLoan;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BookLoanController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index', 'show']);

        $this->authorizeResource(BookLoan::class, 'book', ['only' => ['update', 'destroy', 'show']]);
    }

    public function approve(BookLoan $bookloan)
    {
        $this->authorize('admin', User::class);

        $bookloan->update(['status' => LoanStatus::APPROVED]);

        return response()->json([
            'success' => true,
            'message' => 'Book loan approved successfully',
            'status' => 200,
            'data' => BookLoanResource::make($bookloan),
        ], 200);
    }

    public function unapproved()
    {
        $books = Book::whereHas('bookLoan', function ($query) {
            $query->where('status', '!=', LoanStatus::RETURNED);
        })->get();

        return response()->json([
            'success' => true,
            'message' => 'Unapproved books retrieved successfully',
            'status' => 200,
            'data' => BookResource::collection($books),
        ], 200);
    }

    public function reject(BookLoan $bookloan)
    {
        $this->authorize('admin', User::class);

        $bookloan->delete();

        return response()->json([
            'success' => true,
            'message' => 'Book loan rejected successfully',
            'status' => 200,
            'data' => BookLoanResource::make($bookloan),
        ]);
    }

    public function return (BookLoan $bookloan)
    {
        $this->authorize('return-book', $bookloan);
        $bookloan->update(['status' => LoanStatus::RETURNED, 'return_date' => now()]);

        return response()->json([
            'success' => true,
            'message' => 'Book loan returned successfully',
            'status' => 200,
            'data' => BookLoanResource::make($bookloan),
        ]);
    }

    public function extend(BookLoan $bookloan, Request $request)
    {
        $dueDate = Carbon::parse($bookloan->due_date);
        $daysToAdd = $request->days;
        $newDueDate = $dueDate->addDays($daysToAdd);
        $bookloan->update(['due_date' => $newDueDate]);

        return response()->json([
            'success' => true,
            'message' => 'Book loan extended successfully',
            'status' => 200,
            'data' => BookLoanResource::make($bookloan),
        ], 200);
    }

    public function terminate(BookLoan $bookloan)
    {

        $this->authorize('admin', User::class);

        $bookloan->delete();

        return response()->json([
            'success' => true,
            'message' => 'Book loan terminated successfully',
            'status' => 200,
            'data' => BookLoanResource::make($bookloan),
        ]);

    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreBookLoanRequest $request, Book $book)
    {

        try {

            $bookLoan = BookLoan::create([
                'user_id' => $request->user()->id,
                'book_id' => $book->id,
                'loan_date' => now(),
                'due_date' => $request->get('due_date'),
                'status' => LoanStatus::PENDING,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Book loan created successfully',
                'status' => 201,
                'data' => BookLoanResource::make($bookLoan),
            ], 201);
        } catch (\Exception $e) {
            Log::error($e->getMessage());

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'status' => 500,
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(BookLoan $bookLoan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BookLoan $bookLoan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BookLoan $bookLoan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BookLoan $bookLoan)
    {
        //
    }
}
