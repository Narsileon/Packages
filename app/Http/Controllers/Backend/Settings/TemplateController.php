<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\TemplateUpdateRequest;
use App\Http\Resources\Backend\Settings\TemplateResource;
use App\Models\Template;
use App\Services\TemplateService;
use Inertia\Inertia;

#endregion

class TemplateController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $this->authorize('view', UserRole::class);

        $tables = TemplateResource::collection(Template::all());

        return Inertia::render('Backend/Settings/Templates/Index', compact(
            'tables'
        ));
    }

    public function update(TemplateUpdateRequest $request, Template $template)
    {
        $this->authorize('update', UserRole::class);

        $attributes = $request->validated();

        $template->update($attributes);

        return back();
    }

    public function destroy(Template $template)
    {
        $this->authorize('delete', UserRole::class);

        $template->update([
            Template::FIELD_TEMPLATE => TemplateService::getDefaultTemplate($template->{ Template::FIELD_TYPE })
        ]);

        return back()
            ->with('success', 'template_reseted');;
    }

    #endregion
}
