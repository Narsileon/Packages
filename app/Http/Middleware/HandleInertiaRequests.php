<?php

namespace App\Http\Middleware;

#region USE

use App\Localization\Localization;
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
        $auth = $this->initializeAuth($request);
        $ziggy = $this->initializeZiggy($request);

        $localization = Localization::get();

        return array_merge(parent::share($request), compact(
            "auth",
            "ziggy",

            "localization",
        ));
    }

    #endregion

    #region PRIVATE METHODS

    private function initializeAuth()
    {
        $user = Auth::user();

        if (!$user)
        {
            return null;
        }

        return [
            "user" => [
                "username" => $user->username,
            ]
        ];
    }

    private function initializeZiggy($request)
    {
        $location = url()->current();
        $previousLocation = $this->getPreviousLocation();

        return array_merge((new Ziggy())->toArray(), compact(
            "location",
            "previousLocation",
        ));
    }

    private function getPreviousLocation()
    {
        $url = url()->previous();

        if ($url !== "" && $url !== url()->current())
        {
            return $url;
        }

        else
        {
            return "";
        }
    }

    #endregion
}
