<?php

namespace App\Http\Requests\Backoffice\Locales;

#region USE

use App\Constants\ValidationRules;
use App\Models\Session\Locale;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class LocaleUpdateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can('create', Faq::class);
    }

    public function rules() : array
    {
        return [
            Locale::FIELD_ACTIVE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_BOOLEAN,
            ],
        ];
    }

    #endregion
}
