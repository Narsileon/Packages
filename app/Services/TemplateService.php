<?php

namespace App\Services;

#region USE

use App\Constants\Tables;
use App\Models\User;
use App\Models\UserTemplate;
use App\Templates\Tables\FaqTable;
use App\Templates\Tables\LanguageTable;
use App\Templates\Tables\MenuItemTable;
use App\Templates\Tables\OrderTable;
use App\Templates\Tables\RoleTable;
use App\Templates\Tables\UserLocalizationTable;
use App\Templates\Tables\UserTable;
use Illuminate\Support\Facades\Auth;

#endregion

class TemplateService
{
    #region PUBLIC METHODS

    public static function get($type, $category)
    {
        $columns= self::getColumns($type);
        $userTemplate = self::getUserTemplate($type, $category);

        $userTemplate[Tables::PROPERTY_COLUMNS] = $columns;

        return $userTemplate;
    }

    public static function applyTableSettings($collection, $tableSettings)
    {
        $template = $tableSettings->{ UserTemplate::FIELD_TEMPLATE };

        $collection
            ->search($template)
            ->sort($template);

        if (array_key_exists('current', $template) && $template['current'] != null)
        {
            $template['list'][$template['current']] = $collection->pluck($template['current'])->toArray();
        }

        return $collection;
    }

    #endregion

    #region PRIVATE METHODS

    private static function createDefaultTemplate($type)
    {
        $user = Auth::user();

        $template = self::getDefaultTemplate($type);

        UserTemplate::create([
            UserTemplate::FIELD_USER_ID => $user->{ User::FIELD_ID },
            UserTemplate::FIELD_CATEGORY => Tables::CATEGORY_DEFAULT,
            UserTemplate::FIELD_TYPE => $type,
            UserTemplate::FIELD_TEMPLATE => $template,
        ]);

        UserTemplate::create([
            UserTemplate::FIELD_USER_ID => $user->{ User::FIELD_ID },
            UserTemplate::FIELD_CATEGORY => Tables::CATEGORY_CUSTOM,
            UserTemplate::FIELD_TYPE => $type,
            UserTemplate::FIELD_TEMPLATE => $template,
        ]);
    }

    private static function getDefaultTemplate($type)
    {
        switch ($type) {
            case Tables::TABLE_FAQS:
                return FaqTable::DEFAULT_TEMPLATE;
            case Tables::TABLE_LANGUAGES:
                return LanguageTable::DEFAULT_TEMPLATE;
            case Tables::TABLE_MENU_ITEMS:
                return MenuItemTable::DEFAULT_TEMPLATE;
            case Tables::TABLE_ORDERS:
                return OrderTable::DEFAULT_TEMPLATE;
            case Tables::TABLE_ROLES:
                return RoleTable::DEFAULT_TEMPLATE;
            case Tables::TABLE_USER_LOCALIZATIONS:
                return UserLocalizationTable::DEFAULT_TEMPLATE;
            case Tables::TABLE_USERS:
                return UserTable::DEFAULT_TEMPLATE;
            default:
                return [];
        }
    }

    private static function getUserTemplate($type, $category)
    {
        $user = Auth::user();

        if (!$user)
        {
            return self::getDefaultTemplate($type);
        }

        else if ($user->{ User::ATTRIBUTE_TEMPLATES }->count() == 0 || $user->{ User::ATTRIBUTE_TEMPLATES }->where(UserTemplate::FIELD_TYPE, '=', $type)->first() == null)
        {
            self::createDefaultTemplate($type);
        }

        return $user->{ User::ATTRIBUTE_TEMPLATES }
            ->where(UserTemplate::FIELD_TYPE, '=', $type)
            ->where(UserTemplate::FIELD_CATEGORY, '=', $category)
            ->first();
    }

    private static function getColumns($type)
    {
        switch ($type) {
            case Tables::TABLE_FAQS:
                return FaqTable::COLUMNS;
            case Tables::TABLE_LANGUAGES:
                return LanguageTable::COLUMNS;
            case Tables::TABLE_MENU_ITEMS:
                return MenuItemTable::COLUMNS;
            case Tables::TABLE_ORDERS:
                return OrderTable::COLUMNS;
            case Tables::TABLE_ROLES:
                return RoleTable::COLUMNS;
            case Tables::TABLE_USER_LOCALIZATIONS:
                return UserLocalizationTable::COLUMNS;
            case Tables::TABLE_USERS:
                return UserTable::COLUMNS;
            default:
                return [];
        }
    }

    #endregion
}
