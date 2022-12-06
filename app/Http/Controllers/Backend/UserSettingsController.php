<?php

namespace App\Http\Controllers\Backend;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\UserSettingsUpdateRequest;
use App\Models\UserSetting;

#endregion

class UserSettingsController extends Controller
{
    #region PUBLIC METHODS

    public function update(UserSettingsUpdateRequest $request, UserSetting $userSetting)
    {
        $attributes = $request->validated();

        $userSetting->update($attributes);

        return back()
            ->with('success', 'user_settings_updated');
    }

    #endregion
}
