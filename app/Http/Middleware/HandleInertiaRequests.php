<?php

namespace App\Http\Middleware;

#region USE

use App\Constants\Menus;
use App\Constants\Tables;
use App\Http\Resources\Session\UserSettingResource;
use App\Models\Backend\GeneralSetting;
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
        $menus = $this->initializeMenus($request);
        $settings = $this->initializeSettings($request);
        $ziggy = $this->initializeZiggy($request);

        $localization = LocalizationService::get();

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
            'username' => $user->username,
            'permissions' => $user->getAllPermissions()->pluck('name')->toArray(),
            'settings' => new UserSettingResource($user->settings),
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

    private function initializeMenus($request)
    {
        $backendMenu = MenuService::getMenu(Menus::BACKEND_MENU);
        $frontendFooter = MenuService::getMenu(Menus::FRONTEND_FOOTER);
        $frontendHeader = MenuService::getMenu(Menus::FRONTEND_HEADER);

        return compact(
            'backendMenu',
            'frontendFooter',
            'frontendHeader',
        );
    }

    private function initializeSettings($request)
    {
        $app = [
            'name' => DB::table(Tables::TABLE_GENERAL_SETTINGS)->first()->{ GeneralSetting::FIELD_APP_NAME }
        ];

        $menus = [
            'backend_menu' => MenuService::getMenu(Menus::BACKEND_MENU),
            'frontend_footer' => MenuService::getMenu(Menus::FRONTEND_FOOTER),
            'frontend_header' => MenuService::getMenu(Menus::FRONTEND_HEADER),
        ];

        return compact(
            'app',
            'menus'
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
