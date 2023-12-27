<?php

namespace App\Console\Commands;

use App\Models\BookLoan;
use Illuminate\Console\Command;

class CheckDueDate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:check-due-date';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check due dates and update extended and penalty_amount if needed.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $overdueLoans = BookLoan::where('due_date', '<', now())
            ->where('status', '!=', 'returned')
            ->get();

        foreach ($overdueLoans as $loan) {
            $loan->extended += 1;
            $penaltyPerDay = 100;
            $loan->penalty_amount += $penaltyPerDay * $loan->extended;
            $loan->save();
        }

        $this->info('Due dates checked and updated successfully.');

    }
}
