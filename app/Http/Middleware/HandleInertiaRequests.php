<?php

namespace App\Http\Middleware;

#region USE

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

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
            'auth' => Auth::user() ? [
                'user' => [
                    'username' => Auth::user()->username
                ]
            ] : null,
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy())->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }

    #endregion
}
