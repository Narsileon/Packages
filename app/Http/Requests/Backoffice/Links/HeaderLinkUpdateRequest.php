<?php

namespace App\Http\Requests\Backoffice\Links;

#region USE

use App\Constants\ValidationRules;
use App\Models\Web\HeaderLink;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class HeaderLinkUpdateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can('update', HeaderLink::class);
    }

    public function rules() : array
    {
        return [
            HeaderLink::FIELD_LABEL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::unique('header_links', HeaderLink::FIELD_LABEL, $this->header_link->id),
            ],
            HeaderLink::FIELD_URL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::unique('header_links', HeaderLink::FIELD_URL, $this->header_link->id),
            ],
            HeaderLink::FIELD_ACTIVE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_BOOLEAN,
            ],
        ];
    }

    #endregion
}
