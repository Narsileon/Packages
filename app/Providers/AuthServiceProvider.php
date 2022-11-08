<?php

namespace App\Providers;

#region USE

use App\Acl\Roles;
use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

#endregion

class AuthServiceProvider extends ServiceProvider
{
    #region FIELDS

    protected $policies = [

    ];

    #endregion

    #region PUBLIC METHODS

    public function boot()
    {
        $this->registerPolicies();

        Gate::before(function (User $user) {
            return $user->hasRole(Roles::SUPER_ADMIN) ? true : null;
        });
    }

    #endregion
}
