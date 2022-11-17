<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\LocalizationUpdateRequest;
use App\Models\Backend\Localization;

#endregion

class FaqTemplateController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke(LocalizationUpdateRequest $request, Localization $localization)
    {
        $attributes = $request->validated();

        $localization->update($attributes);

        return redirect(route('admin.dictionary.index'));
    }

    #endregion
}
