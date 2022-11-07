<?php

namespace App\Http\Requests\Backoffice\Faqs;

#region USE

use App\Constants\ValidationRules;
use App\Models\Web\FooterLink;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class FooterLinkUpdateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can('update', FooterLink::class);
    }

    public function rules() : array
    {
        return [
            FooterLink::FIELD_LABEL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::unique('footer_links', FooterLink::FIELD_LABEL, $this->footer_link->id),
            ],
            FooterLink::FIELD_URL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::unique('footer_links', FooterLink::FIELD_URL, $this->footer_link->id),
            ],
            FooterLink::FIELD_ACTIVE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_BOOLEAN,
            ],
        ];
    }

    #endregion
}
