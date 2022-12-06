<?php

namespace App\Http\Controllers\Backend\Settings\UserTemplates;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\UserTemplateUpdateRequest;
use App\Models\UserTemplate;
use App\Services\TemplateService;

#endregion

class LoadUserTemplateController extends Controller
{
    #region PUBLIC METHODS

    public function __invoke(UserTemplateUpdateRequest $request, UserTemplate $userTemplate)
    {
        $attributes = $request->validated();

        $userTemplate->update([
            UserTemplate::FIELD_CUSTOM => $this->getDefault($attributes),
        ]);

        return back()
            ->with('success', 'user_template_loaded');
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
