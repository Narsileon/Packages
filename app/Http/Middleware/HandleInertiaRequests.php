<?php

namespace App\Http\Middleware;

#region USE

use App\Models\Backend\GeneralSettings;
use App\Models\UserMenu;
use App\Services\LocalizationService;
use App\Services\MenuService;
use App\Templates\Menus\BackendMenuTemplate;
use App\Templates\Menus\FrontendFooterTemplate;
use App\Templates\Menus\FrontendHeaderTemplate;
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

        $shared = compact(
            'auth',
            'flash',
            'localization',
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

        $menus = [
            'backend_menu' => Auth::user()
                ? MenuService::getBackendMenu(UserMenu::TYPE_BACKEND_MENU, BackendMenuTemplate::DEFAULT)
                : BackendMenuTemplate::DEFAULT,
            'frontend_footer' => Auth::user()
                ? MenuService::getBackendMenu(UserMenu::TYPE_FRONTEND_FOOTER, FrontendFooterTemplate::DEFAULT)
                : FrontendFooterTemplate::DEFAULT,
            'frontend_header' => Auth::user()
                ? MenuService::getBackendMenu(UserMenu::TYPE_FRONTEND_HEADER, FrontendHeaderTemplate::DEFAULT)
                : FrontendHeaderTemplate::DEFAULT,
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
