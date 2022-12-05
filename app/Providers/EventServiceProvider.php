<?php

namespace App\Providers;

use App\Models\User;
use App\Models\UserMenu;
use App\Models\UserSetting;
use App\Services\MenuService;
use App\Templates\Menus\BackendMenuTemplate;
use App\Templates\Menus\FrontendFooterTemplate;
use App\Templates\Menus\FrontendHeaderTemplate;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        User::created(function($model) {
            UserMenu::create([
                UserMenu::FIELD_USER_ID => $model->{ User::FIELD_ID },
                UserMenu::FIELD_TYPE => UserMenu::TYPE_BACKEND_MENU,
                UserMenu::FIELD_TITLE => 'Default Backend Menu',
                UserMenu::FIELD_TEMPLATE => MenuService::getMenuID(BackendMenuTemplate::get()),
            ]);

            UserMenu::create([
                UserMenu::FIELD_USER_ID => $model->{ User::FIELD_ID },
                UserMenu::FIELD_TYPE => UserMenu::TYPE_FRONTEND_FOOTER,
                UserMenu::FIELD_TITLE => 'Default Frontend Footer',
                UserMenu::FIELD_TEMPLATE => MenuService::getMenuID(FrontendFooterTemplate::get()),
            ]);

            UserMenu::create([
                UserMenu::FIELD_USER_ID => $model->{ User::FIELD_ID },
                UserMenu::FIELD_TYPE => UserMenu::TYPE_FRONTEND_HEADER,
                UserMenu::FIELD_TITLE => 'Default Frontend Header',
                UserMenu::FIELD_TEMPLATE =>MenuService::getMenuID(FrontendHeaderTemplate::get()),
            ]);
            UserSetting::create([
                UserSetting::FIELD_USER_ID => $model->{ User::FIELD_ID },
            ]);
        });
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents()
    {
        return false;
    }
}
