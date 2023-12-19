<?php

namespace App\Models;

use App\Scopes\LatestScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
    }
}
