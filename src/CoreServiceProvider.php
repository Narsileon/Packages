<?php

namespace Narsil\Core;

#region USE

use Illuminate\Support\ServiceProvider;

#endregion

class CoreServiceProvider extends ServiceProvider
{
    #region CONSTANTS

    const NAMESPACE = 'core';

    #endregion

    #region PUBLIC METHODS

    public function register()
    {
        parent::register();
    }

    public function boot()
    {
        $this->loadViewsFrom(__DIR__ . '/../resources/js', self::NAMESPACE);
        $this->loadJsonTranslationsFrom(__DIR__ . '/../lang');

        $this->configureRoutes();
        $this->configureCommands();
    }

    #endregion

    #region PRIVATE METHODS

    private function configureRoutes()
    {
        $this->loadRoutesFrom(__DIR__ . '/../routes/backend.php');
        $this->loadRoutesFrom(__DIR__ . '/../routes/frontend.php');
        $this->loadRoutesFrom(__DIR__ . '/../routes/session.php');
    }

    private function configureCommands()
    {
        if (!$this->app->runningInConsole()) {
            return;
        }

        $this->commands([

        ]);
    }

    #endregion
}
