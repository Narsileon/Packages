<?php

namespace App\Http\Middleware;

#region USE

use Illuminate\Http\Request;
use Inertia\Middleware;

#endregion

class HandleInertiaRequests extends Middleware
{
    #region FIELDS

    protected $rootView = 'app';

    #endregion

    #region PUBLIC METHODS

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            //
        ]);
    }

    #endregion
}
