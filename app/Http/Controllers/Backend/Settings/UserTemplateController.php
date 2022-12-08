<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\UserTemplateUpdateRequest;
use App\Models\Template;
use App\Models\UserTemplate;
use App\Services\TemplateService;

#endregion

class UserTemplateController extends Controller
{
    #region PUBLIC METHODS

    public function load(UserTemplateUpdateRequest $request, UserTemplate $userTemplate)
    {
        $attributes = $request->validated();

        $userTemplate->update([
            UserTemplate::FIELD_CUSTOM => $this->getDefault($attributes),
        ]);

        return back()
            ->with('success', 'user_template_loaded');
    }

    public function reset(UserTemplateUpdateRequest $request, UserTemplate $userTemplate)
    {
        $attributes = $request->validated();

        $userTemplate->update([
            UserTemplate::FIELD_DEFAULT => [],
            UserTemplate::FIELD_CUSTOM => Template::where(Template::FIELD_TYPE, '=', $attributes[Template::FIELD_TYPE])->first()->{ Template::FIELD_TEMPLATE },
        ]);

        return back()
            ->with('success', 'user_template_reseted');
    }

    public function save(UserTemplateUpdateRequest $request, UserTemplate $userTemplate)
    {
        $attributes = $request->validated();

        $userTemplate->update([
            UserTemplate::FIELD_DEFAULT => $attributes[UserTemplate::FIELD_CUSTOM],
        ]);

        return back()
            ->with('success', 'user_template_saved');
    }

    public function update(UserTemplateUpdateRequest $request, UserTemplate $userTemplate)
    {
        $attributes = $request->validated();

        $userTemplate->update([
            UserTemplate::FIELD_CUSTOM => $attributes[UserTemplate::FIELD_CUSTOM],
        ]);

        return back();
    }

    #endregion

    #region PRIVATE METHODS

    private function getDefault($attributes)
    {
        if (empty($attributes[UserTemplate::FIELD_DEFAULT]))
        {
            return TemplateService::getDefaultTemplate($attributes[UserTemplate::FIELD_TYPE]);
        }

        else
        {
            return $attributes[UserTemplate::FIELD_DEFAULT];
        }
    }

    #endregion
}
