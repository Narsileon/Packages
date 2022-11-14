<?php

namespace App\Http\Requests\Backend\Frontoffice;

#region USE

use App\Constants\ValidationRules;
use App\Models\Web\Faq;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class FaqCreateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can('create', Faq::class);
    }

    public function rules() : array
    {
        return [
            Faq::FIELD_QUESTION => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::unique('faqs', Faq::FIELD_QUESTION),
            ],
            Faq::FIELD_ANSWER => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
            ],
        ];
    }

    #endregion
}
