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
        $tableSettings = TemplateService::get(Tables::TABLE_LOCALIZATIONS, Tables::CATEGORY_CUSTOM);

        $locale = App::getLocale();

        $defaultLocalization = LocalizationService::get();
        $customLocalization = Localization::where(Localization::FIELD_CODE, '=', $locale)->first() ?? Localization::create([
            Localization::FIELD_CODE => $locale,
            Localization::FIELD_LOCALIZATION => LocalizationService::getLocalizationKeys(),
        ]);

        $collection = $this->generateCollection([], $customLocalization->{ Localization::FIELD_LOCALIZATION }, '');

        return Inertia::render('Backend/Settings/Localizations/Index', compact(
            'collection',
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
            ->with('success', 'dictionary_updated');
    }

    #endregion

    #region PRIVATE METHODS

    private function generateCollection($collection, $localization, $path) : array
    {
        foreach($localization as $key=>$value) {
            if (is_array($value))
            {
                $collection = $this->generateCollection($collection, $value, $path == '' ? $key : $path . '.' . $key);
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
