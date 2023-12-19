<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $randomUserId = User::pluck('id')->random();
        return [
            "name" => fake()->sentence(),
            "publisher" => fake()->company(),
            "isbn" => fake()->isbn13(),
            "category" => fake()->word(),
            "sub_category" => fake()->word(),
            "description" => fake()->sentence(),
            "pages" => fake()->numberBetween(100, 1000),
            "image" => fake()->imageUrl(640, 480, 'books', true),
            "added_by" => $randomUserId,
        ];
    }
}
