<?php

namespace App\Traits;

#region USE

use ReflectionClass;

#endregion

trait HasConstants
{
    #region FIELDS

    private static $cache = [];

    #endregion

    #region PUBLIC METHODS

    public static function getConstants(): Array
    {
        if (empty(self::$cache)) 
        {
            $reflectionClass = new ReflectionClass(static::class);

            self::$cache = $reflectionClass->getConstants();
        }

        return self::$cache;
    }

    #endregion
}
