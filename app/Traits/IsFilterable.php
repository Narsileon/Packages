<?php

namespace App\Traits;

#region USE

use App\Constants\Tables;
use Illuminate\Support\Facades\Schema;

#endregion

trait IsFilterable
{
    #region PUBLIC METHODS

    public function scopeSearch($query, $template)
    {
        $globalFilter = array_key_exists(Tables::PROPERTY_GLOBAL_FILTER, $template) ? $template[Tables::PROPERTY_GLOBAL_FILTER] : null;
        $localFilter = array_key_exists(Tables::PROPERTY_COLUMN_FILTERS, $template) ? $template[Tables::PROPERTY_COLUMN_FILTERS] : [];

        $columns = Schema::getColumnListing($this->getTable());

        foreach($columns as $column)
        {
            if ($globalFilter)
            {
                $query->orWhere($column, 'like', '%' . $globalFilter . '%');
            }

            foreach($localFilter as $columnFilter)
            {
                if ($columnFilter[Tables::FIELD_ID] == $column)
                {
                    if (array_key_exists(Tables::FIELD_FILTER_1, $columnFilter[Tables::FIELD_VALUE][0]))
                    {
                        if (is_numeric($columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_1]))
                        {
                            $query->where(
                                $columnFilter[Tables::FIELD_ID],
                                $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR_1] ?? 'like',
                                $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_1]
                            );
                        }

                        else
                        {
                            $query->where(
                                $columnFilter[Tables::FIELD_ID],
                                $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR_1] ?? 'like',
                                '%' . $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_1] . '%'
                            );
                        }

                        if (array_key_exists(Tables::FIELD_FILTER_2, $columnFilter[Tables::FIELD_VALUE][0]) && $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2])
                        {
                            if (!array_key_exists(Tables::FIELD_OPERATOR, $columnFilter[Tables::FIELD_VALUE][0]) || $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR] == '&&')
                            {
                                if (is_numeric($columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2]))
                                {
                                    $query->where(
                                        $columnFilter[Tables::FIELD_ID],
                                        $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR_2] ?? 'like',
                                        $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2]
                                    );
                                }

                                else
                                {
                                    $query->where(
                                        $columnFilter[Tables::FIELD_ID],
                                        $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR_2] ?? 'like',
                                        '%' . $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2] . '%'
                                    );
                                }
                            }

                            else
                            {
                                if (is_numeric($columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2]))
                                {
                                    $query->orWhere(
                                        $columnFilter[Tables::FIELD_ID],
                                        $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR_2] ?? 'like',
                                        $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2]
                                    );
                                }

                                else
                                {
                                    $query->orWhere(
                                        $columnFilter[Tables::FIELD_ID],
                                        $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR_2] ?? 'like',
                                        '%' . $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2] . '%'
                                    );
                                }
                            }
                        }
                    }

                    else if (array_key_exists(Tables::FIELD_FILTER_2, $columnFilter[Tables::FIELD_VALUE][0]) && $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2])
                    {
                        if (is_numeric($columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2]))
                        {
                            $query->where(
                                $columnFilter[Tables::FIELD_ID],
                                $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR_2] ?? 'like',
                                $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2]
                            );
                        }

                        else
                        {
                            $query->where(
                                $columnFilter[Tables::FIELD_ID],
                                $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_OPERATOR_2] ?? 'like',
                                '%' . $columnFilter[Tables::FIELD_VALUE][0][Tables::FIELD_FILTER_2] . '%'
                            );
                        }
                    }
                }
            }
        }
    }

    #endregion
}
