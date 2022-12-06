<?php

namespace App\Http\Controllers\Backend\Settings;

#region USE

use App\Constants\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Settings\UserLocalizationUpdateRequest;
use App\Models\Backend\Localization;
use App\Services\LocalizationService;
use App\Services\TemplateService;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;

#endregion

class LocalizationController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $tableSettings = TemplateService::get(Tables::TABLE_LOCALIZATIONS);

        $locale = App::getLocale();

        $defaultLocalization = LocalizationService::getDefaultLocalization();
        $customLocalization = LocalizationService::getCustomLocalization();

        $collection = $this->generateCollection([], $defaultLocalization, $customLocalization, '');

        return Inertia::render('Backend/Settings/Localizations/Index', compact(
            'collection',
            'customLocalization',
            'tableSettings',
        ));
    }

    public function update(UserLocalizationUpdateRequest $request, Localization $localization)
    {
        $attributes = $request->validated();

        $customLocalization = (object)[];

        foreach($attributes['dictionary'] as $item) {
            $customLocalization->{ $item['key'] } = $item['custom_value'];
        }

        $attributes['dictionary'] = (object)$customLocalization;

        $localization->update($attributes);

        return redirect(route('admin.localizations.index'))
            ->with('success', 'translation_updated');
    }

    #endregion

    #region PRIVATE METHODS

    private function generateCollection($collection, $defaultLocalization, $customLocalization, $path) : array
    {
        foreach($defaultLocalization as $key=>$value) {
            if (is_array($value))
            {
                $collection = $this->generateCollection($collection, $value, $customLocalization, $path == '' ? $key : $path . '.' . $key);
            }

            else
            {
                array_push($collection, [
                    'path' => $path,
                    'key' => $key,
                    'value' => $value,
                ]);
            }
        }

        return $collection;
    }

    #endregion
}
