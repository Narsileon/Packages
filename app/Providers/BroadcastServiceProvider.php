<?php

namespace App\Providers;

#region USE

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\ServiceProvider;

#endregion

class BroadcastServiceProvider extends ServiceProvider
{
    #region PUBLIC METHODS

    public function boot()
    {
        Broadcast::routes();

        require base_path('routes/channels.php');
    }

    #endregion
}
