<?php

namespace App\Models;

use App\Scopes\LatestScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookLoan extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function boot()
    {
        parent::boot();

        static::addGlobalScope(new LatestScope);

        static::creating(function ($model) {

            $existingLoan = BookLoan::where('book_id', $model->book_id)
                ->whereNull('return_date')
                ->exists();

            if ($existingLoan) {
                throw new \Exception('Book is already loaned', 409);
            }
        });
    }
}
