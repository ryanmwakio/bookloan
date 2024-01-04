<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Book;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $admin = [
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin'),
        ];

        User::factory()->create($admin);
        Book::factory()->count(3)->create();
    }
}
