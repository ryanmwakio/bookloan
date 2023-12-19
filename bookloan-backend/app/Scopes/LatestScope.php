<?php
namespace App\Scopes;

use Illuminate\Database\Eloquent\Scope;

class LatestScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function apply($builder, $model)
    {
        $builder->orderBy($model::CREATED_AT, 'desc');
    }
}
