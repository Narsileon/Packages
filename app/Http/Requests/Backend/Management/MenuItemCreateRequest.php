<?php

namespace App\Http\Requests\Backend\Management;

#region USE

use App\Acl\Permissions;
use App\Constants\ValidationRules;
use App\Models\MenuItem;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class MenuItemCreateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can(Permissions::MENU_ITEMS_CREATE);
    }

    public function rules() : array
    {
        return [
            MenuItem::FIELD_SLUG => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::unique('menu_items', MenuItem::FIELD_SLUG),
            ],
            MenuItem::FIELD_TYPE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
            ],
            MenuItem::FIELD_ICON => [
                ValidationRules::OPTIONAL,
                ValidationRules::TYPE_STRING,
            ],
            MenuItem::FIELD_LABEL => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
            ],
            MenuItem::FIELD_URL => [
                ValidationRules::OPTIONAL,
                ValidationRules::TYPE_STRING,
            ],
        ];
    }

    #endregion
}
