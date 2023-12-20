<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookLoanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            "loaned_to" => $this->user,
            'book' => $this->book,
            'loan_date' => $this->loan_date,
            'due_date' => $this->due_date,
            'return_date' => $this->return_date,
            'extended' => $this->extended,
            'extension_date' => $this->extension_date,
            'penalty_amount' => $this->penalty_amount,
            'penalty_status' => $this->penalty_status,
            'status' => $this->status,
        ];
    }
}
