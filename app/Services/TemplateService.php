<?php

namespace App\Services;

#region USE

use App\Constants\Tables;
use App\Models\User;
use App\Models\UserTemplate;
use App\Templates\Tables\FaqTable;
use App\Templates\Tables\LanguageTable;
use App\Templates\Tables\LocalizationTable;
use App\Templates\Tables\MenuItemTable;
use App\Templates\Tables\OrderTable;
use App\Templates\Tables\RoleTable;
use App\Templates\Tables\UserTable;
use Illuminate\Support\Facades\Auth;

#endregion

class TemplateService
{
    #region PUBLIC METHODS

    public static function get($type)
    {
        $columns= self::getColumns($type);
        $userTemplate = self::getUserTemplate($type);

        $userTemplate[Tables::PROPERTY_COLUMNS] = $columns;

        return $userTemplate;
    }

    public static function getColumns($type)
    {
        switch ($type) {
            case Tables::TABLE_FAQS:
                return FaqTable::COLUMNS;
            case Tables::TABLE_LANGUAGES:
                return LanguageTable::COLUMNS;
            case Tables::TABLE_LOCALIZATIONS:
                return LocalizationTable::COLUMNS;
            case Tables::TABLE_MENU_ITEMS:
                return MenuItemTable::COLUMNS;
            case Tables::TABLE_ORDERS:
                return OrderTable::COLUMNS;
            case Tables::TABLE_ROLES:
                return RoleTable::COLUMNS;
            case Tables::TABLE_USERS:
                return UserTable::COLUMNS;
            default:
                return [];
        }
    }

    public static function applyTableSettings($collection, $tableSettings)
    {
        $template = $tableSettings->{ UserTemplate::FIELD_CUSTOM };

        if (array_key_exists('current', $template) && $template['current'] != null)
        {
            $template['list'][$template['current']] = $collection->pluck($template['current'])->toArray();
        }

        $tableSettings->{ UserTemplate::FIELD_CUSTOM } = $template;

        return $tableSettings;
    }

    public static function getDefaultTemplate($type)
    {
        switch ($type) {
            case Tables::TABLE_FAQS:
                return FaqTable::DEFAULT_TEMPLATE;
            case Tables::TABLE_LANGUAGES:
                return LanguageTable::DEFAULT_TEMPLATE;
            case Tables::TABLE_LOCALIZATIONS:
                return LocalizationTable::DEFAULT_TEMPLATE;
            case Tables::TABLE_MENU_ITEMS:
                return MenuItemTable::DEFAULT_TEMPLATE;
            case Tables::TABLE_ORDERS:
                return OrderTable::DEFAULT_TEMPLATE;
            case Tables::TABLE_ROLES:
                return RoleTable::DEFAULT_TEMPLATE;
            case Tables::TABLE_USERS:
                return UserTable::DEFAULT_TEMPLATE;
            default:
                return [];
        }
    }

    #endregion

    #region PRIVATE METHODS

    private static function createDefaultTemplate($type)
    {
        $user = Auth::user();

        $template = self::getDefaultTemplate($type);

        return UserTemplate::create([
            UserTemplate::FIELD_USER_ID => $user->{ User::FIELD_ID },
            UserTemplate::FIELD_TYPE => $type,
            UserTemplate::FIELD_DEFAULT => $template,
            UserTemplate::FIELD_CUSTOM => $template,
        ]);
    }

    private static function getUserTemplate($type)
    {
        $user = Auth::user();

        if (!$user)
        {
            return self::getDefaultTemplate($type);
        }

        else if ($user->{ User::ATTRIBUTE_TEMPLATES }->count() == 0 || $user->{ User::ATTRIBUTE_TEMPLATES }->where(UserTemplate::FIELD_TYPE, '=', $type)->first() == null)
        {
            return self::createDefaultTemplate($type);
        }

        else
        {
            return $user->{ User::ATTRIBUTE_TEMPLATES }
                ->where(UserTemplate::FIELD_TYPE, '=', $type)
                ->first();
        }
    }

    #endregion
}
