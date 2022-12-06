<?php

namespace App\Http\Controllers\Backend\Settings\UserTemplates;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\UserTemplateUpdateRequest;
use App\Models\UserTemplate;

#endregion

class SaveUserTemplateController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke(UserTemplateUpdateRequest $request, UserTemplate $userTemplate)
    {
        $attributes = $request->validated();

        $userTemplate->update([
            UserTemplate::FIELD_DEFAULT => $attributes[UserTemplate::FIELD_CUSTOM],
        ]);

        return back()
            ->with('success', 'user_template_saved');
    }

    #endregion
}
