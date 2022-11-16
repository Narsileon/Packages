<?php

namespace App\Constants;

#region USE

use Illuminate\Validation\Rule;

#endregion

abstract class ValidationRules
{
    #region CONSTANTS

    const CONFIRMED = 'confirmed';
    const OPTIONAL = 'nullable';
    const REQUIRED = 'required';

    const TYPE_ARRAY = 'array';
    const TYPE_BOOLEAN = 'boolean';
    const TYPE_DATE = 'date';
    const TYPE_EMAIL = 'email';
    const TYPE_IMAGE = 'image';
    const TYPE_INTEGER = 'int';
    const TYPE_STRING = 'string';

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
