<?php

namespace App\Http\Resources;

use App\Models\BookLoan;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $url = Storage::url($this->image);
        $fullUrl = url($url);

        $loan = null;
        $number_of_days = null;
        $passed_days = null;
        $percentage_progress = null;
        $remaining_days = null;

        if (BookLoan::where('book_id', $this->id)->where('return_date', null)->exists()) {
            $loan = BookLoan::where('book_id', $this->id)->where('return_date', null)->first();
            $startDate = Carbon::parse($loan->loan_date);
            $endDate = Carbon::parse($loan->due_date);
            $currentDate = now();

            $numberOfDays = $startDate->diffInDays($endDate);
            $number_of_days = $numberOfDays;

            $passed_days = $startDate->diffInDays($currentDate);
            $percentage_progress = ($numberOfDays == 0) ? 100 : ($passed_days / $numberOfDays) * 100;

            $remaining_days = $endDate->diffInDays($currentDate);

        }

        return [
            'id' => $this->id,
            'name' => $this->name,
            'publisher' => $this->publisher,
            'isbn' => $this->isbn,
            'category' => $this->category,
            'sub_category' => $this->sub_category,
            'description' => $this->description,
            'pages' => $this->pages,
            'image' => $fullUrl,
            'added_by' => UserResource::make($this->user),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'loan' => BookLoanResource::make(BookLoan::where('book_id', $this->id)->where('return_date', null)->orderBy('id')->first()),
            'total_days' => $number_of_days,
            'passed_days' => $passed_days,
            'percentage_progress' => $percentage_progress,
            'remaining_days' => $remaining_days,

        ];
    }
}
