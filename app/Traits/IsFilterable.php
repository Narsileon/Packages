<?php

namespace App\Traits;

#region USE

use App\Constants\Tables;
use App\Constants\Types;
use App\Models\UserTemplate;

#endregion

trait IsFilterable
{
    #region PUBLIC METHODS

    public function scopeSearch($query, $tableSettings)
    {
        $columns = $tableSettings->{ Tables::PROPERTY_COLUMNS };
        $template = $tableSettings->{ UserTemplate::FIELD_CUSTOM };

        $globalFilter = array_key_exists(Tables::PROPERTY_GLOBAL_FILTER, $template) ? $template[Tables::PROPERTY_GLOBAL_FILTER] : null;
        $localFilter = array_key_exists(Tables::PROPERTY_COLUMN_FILTERS, $template) ? $template[Tables::PROPERTY_COLUMN_FILTERS] : [];

        foreach($columns as $column)
        {
            if (array_key_exists(Tables::FIELD_ACCESSOR_KEY, $column))
            {
                if ($globalFilter)
                {
                    $query->orWhere($column[Tables::FIELD_ACCESSOR_KEY], 'like', '%' . $globalFilter . '%');
                }

                foreach($localFilter as $columnFilter)
                {
                    if ($columnFilter[Tables::FIELD_ID] == $column[Tables::FIELD_ACCESSOR_KEY])
                    {
                        if (array_key_exists(Tables::FIELD_FILTER_1, $columnFilter[Tables::FIELD_VALUE][0]) && $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_1])
                        {
                            self::scopeWhere(
                                $query,
                                $column[Tables::FIELD_TYPE],
                                $columnFilter[Tables::FIELD_ID],
                                $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR_1] ?? 'like',
                                $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_1]
                            );

                            if (array_key_exists(Tables::FIELD_FILTER_2, $columnFilter[Tables::FIELD_VALUE][0]) && $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2])
                            {
                                if (!array_key_exists(Tables::FIELD_OPERATOR, $columnFilter[Tables::FIELD_VALUE][0]) || $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR] == '&&')
                                {
                                    $this->scopeWhere(
                                        $query,
                                        $column[Tables::FIELD_TYPE],
                                        $columnFilter[Tables::FIELD_ID],
                                        $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR_2] ?? 'like',
                                        $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2]
                                    );
                                }

                                else
                                {
                                    $this->scopeOrWhere(
                                        $query,
                                        $column[Tables::FIELD_TYPE],
                                        $columnFilter[Tables::FIELD_ID],
                                        $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR_2] ?? 'like',
                                        $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2]
                                    );
                                }
                            }
                        }

                        else if (array_key_exists(Tables::FIELD_FILTER_2, $columnFilter[Tables::FIELD_VALUE][0]) && $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2])
                        {
                            $this->scopeWhere(
                                $query,
                                $column[Tables::FIELD_TYPE],
                                $columnFilter[Tables::FIELD_ID],
                                $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR_2] ?? 'like',
                                $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2]
                            );
                        }
                    }
                }
            }
        }
    }

    #endregion

    #region PRIVATE METHODS

    private static function scopeWhere($query, $type, $key, $operator, $value)
    {
        switch ($type) {
            case Types::DATE:
                $query->whereDate($key, $operator, $value);
                break;
            case Types::NUMBER:
                $query->where($key, $operator, $value);
                break;
            case Types::TEXT:
                $query->where($key, $operator, '%' . $value . '%');
                break;
            default:
                break;
        }
    }

    private function scopeOrWhere($query, $type, $key, $operator, $value)
    {
        switch ($type) {
            case Types::DATE:
                $query->orWhereDate($key, $operator, $value);
                break;
            case Types::NUMBER:
                $query->orWhere($key, $operator, $value);
                break;
            case Types::TEXT:
                $query->orWhere($key, $operator, '%' . $value . '%');
                break;
            default:
                break;
        }
    }

    #endregion
}
