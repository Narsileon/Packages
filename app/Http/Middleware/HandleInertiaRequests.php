<?php

namespace App\Http\Middleware;

#region USE

use App\Constants\Menus;
use App\Models\Backend\GeneralSettings;
use App\Services\LocalizationService;
use App\Services\MenuService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
        $flash = $this->initializeFlash($request);
        $settings = $this->initializeSettings($request);
        $ziggy = $this->initializeZiggy($request);

        $localization = LocalizationService::get();
        $menus = Auth::user() ? MenuService::get() : Menus::DEFAULT_BACKEND_MENU;

        $shared = compact(
            'auth',
            'flash',
            'localization',
            'menus',
            'settings',
            'ziggy',
        );

        return array_merge(parent::share($request), compact(
            'shared',
        ));
    }

    #endregion

    #region PRIVATE METHODS

    private function initializeAuth($request)
    {
        $user = Auth::user();

        if (!$user)
        {
            return null;
        }

        return [
            'user' => [
                'username' => $user->username,
            ]
        ];
    }

    private function initializeFlash($request)
    {
        $success = $request->session()->get('success');
        $error = $request->session()->get('error');

        return compact(
            'success',
            'error',
        );
    }

    private function initializeSettings($request)
    {
        $app = [
            'name' => DB::table('general_settings')->first()->{ GeneralSettings::FIELD_APP_NAME }
        ];

        return compact(
            'app',
        );
    }

    private function initializeZiggy($request)
    {
        $location = url()->current();
        $previousLocation = $this->getPreviousLocation();

        return array_merge((new Ziggy())->toArray(), compact(
            'location',
            'previousLocation',
        ));
    }

    private function getPreviousLocation()
    {
        $url = url()->previous();

        if ($url !== '' && $url !== url()->current())
        {
            return $url;
        }

        else
        {
            return '';
        }
    }

    #endregion
}
