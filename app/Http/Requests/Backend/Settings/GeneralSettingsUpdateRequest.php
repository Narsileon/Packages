<?php

namespace App\Http\Requests\Backend\Settings;

#region USE

use App\Acl\Permissions;
use App\Constants\ValidationRules;
use App\Models\Backend\GeneralSettings;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class GeneralSettingsUpdateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can(Permissions::GENERAL_SETTINGS_UPDATE);
    }

    public function rules() : array
    {
        return [
            GeneralSettings::FIELD_APP_NAME => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
            ],
        ];
    }

    #endregion PUBLIC METHODS
}
