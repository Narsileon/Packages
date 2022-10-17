<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Acl\Roles;
use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [

    ];

    public function boot()
    {
        $this->registerPolicies();

        Gate::before(function(User $user, $ability) {
            return $user->hasRole(Roles::SUPER_ADMIN) ? true : null;
        });
    }
}
