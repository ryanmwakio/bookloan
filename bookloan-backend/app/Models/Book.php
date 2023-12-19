<?php

namespace App\Models;

use App\Scopes\LatestScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class, 'added_by');
    }

    public function bookLoan()
    {
        return $this->hasOne(BookLoan::class);
    }

    public static function boot()
    {
        parent::boot();

        static::addGlobalScope(new LatestScope);
    }

}
