<?php

namespace App\Http\Requests\Backend\Management;

#region USE

use App\Acl\Permissions;
use App\Constants\Tables;
use App\Constants\ValidationRules;
use App\Models\MenuItem;
use Illuminate\Foundation\Http\FormRequest;

#endregion

class MenuItemUpdateRequest extends FormRequest
{
    #region PUBLIC METHODS

    public function authorize() : bool
    {
        return $this->user()->can(Permissions::MENU_ITEMS_UPDATE);
    }

    public function rules() : array
    {
        return [
            MenuItem::FIELD_SLUG => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_STRING,
                ValidationRules::unique(Tables::TABLE_MENU_ITEMS, MenuItem::FIELD_SLUG, $this->menuItem->{ MenuItem::FIELD_ID }),
            ],
            MenuItem::FIELD_ACTIVE => [
                ValidationRules::REQUIRED,
                ValidationRules::TYPE_BOOLEAN,
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
                ValidationRules::TYPE_ARRAY,
            ],
            MenuItem::FIELD_URL => [
                ValidationRules::OPTIONAL,
                ValidationRules::TYPE_STRING,
            ],
        ];
    }

    #endregion PUBLIC METHODS
}
