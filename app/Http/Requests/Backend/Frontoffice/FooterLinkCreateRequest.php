<?php

namespace App\Http\Requests\Backend\Frontoffice;

#region USE

use App\Constants\ValidationRules;
use App\Models\Frontend\FooterLink;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class FooterLinkCreateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can('create', FooterLink::class);
    }

    public function rules() : array
    {
        return [
            FooterLink::FIELD_LABEL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::unique('footer_links', FooterLink::FIELD_LABEL),
            ],
            FooterLink::FIELD_URL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::unique('footer_links', FooterLink::FIELD_URL),
            ],
            FooterLink::FIELD_ACTIVE => [
                ValidationRules::TYPE_BOOLEAN,
            ],
        ];
    }

    #endregion
}
