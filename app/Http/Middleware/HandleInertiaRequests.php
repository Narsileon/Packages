<?php

namespace App\Http\Middleware;

#region USE

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
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
        $localization = $this->initializeLocaliztion();
        $ziggy = $this->initializeZiggy($request);

        return array_merge(parent::share($request), compact(
            "auth",
            "localization",
            "ziggy",
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

    private function initializeLocaliztion()
    {
        $availableLocales = Config::get("app.available_locales");
        $locale = App::getLocale();

        return compact(
            "availableLocales",
            "locale"
        );
    }

    private function initializeZiggy($request)
    {
        return array_merge((new Ziggy())->toArray(), [
            'location' => $request->url(),
        ]);
    }

    #endregion
}
