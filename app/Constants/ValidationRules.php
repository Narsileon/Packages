<?php

namespace App\Constants;

#region USE

use Illuminate\Validation\Rule;

#endregion

abstract class ValidationRules
{
    #region CONSTANTS

    public const CONFIRMED = 'confirmed';
    public const OPTIONAL = 'nullable';
    public const REQUIRED = 'required';

    public const TYPE_ARRAY = 'array';
    public const TYPE_BOOLEAN = 'boolean';
    public const TYPE_DATE = 'date';
    public const TYPE_EMAIL = 'email';
    public const TYPE_IMAGE = 'image';
    public const TYPE_INTEGER = 'int';
    public const TYPE_STRING = 'string';

    #endregion

    #region PUBLIC METHODS

    public static function exists(string $table, string $column) : string
    {
        return Rule::exists($table, $column);
    }

    public static function unique(string $table, string $column, string $ignoreId = '') : string
    {
        return Rule::unique($table, $column)->ignore($ignoreId);
    }

    public static function min(int $value) : string
    {
        return 'min:' . $value;
    }

    public static function max(int $value) : string
    {
        return 'max:' . $value;
    }

    #endregion
}
