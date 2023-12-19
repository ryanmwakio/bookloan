<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
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
            'name' => $this->name,
            'publisher' => $this->publisher,
            'isbn' => $this->isbn,
            'category' => $this->category,
            'sub_category' => $this->sub_category,
            'description' => $this->description,
            'pages' => $this->pages,
            'image' => $this->image,
            'added_by' => UserResource::make($this->whenLoaded('user')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
