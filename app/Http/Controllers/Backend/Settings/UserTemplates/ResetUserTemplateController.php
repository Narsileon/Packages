<?php

namespace App\Http\Controllers\Backend\Settings\UserTemplates;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\UserTemplateUpdateRequest;
use App\Models\Template;
use App\Models\UserTemplate;

#endregion

class ResetUserTemplateController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke(UserTemplateUpdateRequest $request, UserTemplate $userTemplate)
    {
        $attributes = $request->validated();

        $userTemplate->update([
            UserTemplate::FIELD_DEFAULT => [],
            UserTemplate::FIELD_CUSTOM => Template::where(Template::FIELD_TYPE, '=', $attributes[Template::FIELD_TYPE])->first()->{ Template::FIELD_TEMPLATE },
        ]);

        return back()
            ->with('success', 'user_template_reseted');
    }

    #endregion
}
