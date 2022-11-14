<?php

namespace App\Http\Requests\Backend\Frontoffice;

#region USE

use App\Constants\ValidationRules;
use App\Models\Frontend\HeaderLink;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class HeaderLinkCreateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can('create', HeaderLink::class);
    }

    public function rules() : array
    {
        return [
            HeaderLink::FIELD_LABEL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::unique('header_links', HeaderLink::FIELD_LABEL),
            ],
            HeaderLink::FIELD_URL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::unique('header_links', HeaderLink::FIELD_URL),
            ],
            HeaderLink::FIELD_ACTIVE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_BOOLEAN,
            ],
        ];
    }

    #endregion
}
