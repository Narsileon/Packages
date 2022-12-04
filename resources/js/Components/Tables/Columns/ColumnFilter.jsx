import { useMemo, useState } from "react"
import TableFilter from "@/Components/Tables/TableFilter"
import TableFilterDropdown from "../TableFilterDropdown";

export default function ColumnFilter({
    table,
    column,
}) {
    const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);

    const columnFilterValue = column.getFilterValue();

    const sortedUniqueValues = useMemo(
        () =>
            typeof firstValue === 'number'
            ? []
            : Array.from(column.getFacetedUniqueValues().keys()).sort(),
        [column.getFacetedUniqueValues()]
    );

    const options = [
        {
            label: 'equal',
            value: '==',
        },
        {
            label: 'not_equal',
            value: '!=',
        },
        {
            label: 'less',
            value: '!=',
        },
        {
            label: 'less_or_equal',
            value: '!=',
        },
        {
            label: 'greater_or_equal',
            value: '!=',
        },
        {
            label: 'greater',
            value: '!=',
        },
    ];

    const [filters, setFilters] = useState();

    if (table.options.manualFiltering) {
        return (
            <>
                {
                    column.columnDef.type === 'integer' ? (
                        <div>
                            <TableFilterDropdown value={ filters } setValue={ filters } options={ options } />
                            <TableFilter
                                type="number"
                                value={ (columnFilterValue)?.[0] ?? '' }
                                onChange={ value => column.setFilterValue((old) => [value, old?.[1]]) }
                                placeholder={ `Min ${ column.getFacetedMinMaxValues()?.[0] ? `(${column.getFacetedMinMaxValues()?.[0]})` : '' }` }
                            />
                            <TableFilterDropdown options={ options } />
                            <TableFilter
                                type="number"
                                value={ (columnFilterValue)?.[1] ?? '' }
                                onChange={ value => column.setFilterValue((old) => [old?.[0], value]) }
                                placeholder={ `Max ${ column.getFacetedMinMaxValues()?.[1] ? `(${column.getFacetedMinMaxValues()?.[1]})` : '' }` }
                            />
                        </div>
                    ) : (
                        <>
                            {
                                table.getState().list && table.getState().list[column.id] ? (
                                    <datalist id={ column.id + 'list' }>
                                        {
                                            table.getState().list[column.id].slice(0, 5000).map((value, index) => (
                                                <option
                                                    key={ index }
                                                    value={ value }
                                                />
                                            ))
                                        }
                                    </datalist>
                                ) : null
                            }

                            <TableFilter
                                type="text"
                                value={ columnFilterValue ?? '' }
                                onChange={ value =>
                                {
                                    column.setFilterValue(value)
                                    table.options.meta.setCurrent(value ? column.id : null)
                                }}
                                placeholder={ `Search...` }
                                list={ column.id + 'list' }
                            />
                        </>
                    )
                }
            </>
        )
    }

    else {
        return (
            <>
                {
                    column.columnDef.type === 'integer' ? (
                        <div>
                            <div>
                                <TableFilter
                                    type="number"
                                    value={ (columnFilterValue)?.[0] ?? '' }
                                    onChange={ value => column.setFilterValue((old) => [value, old?.[1]]) }
                                    placeholder={ `Min ${ column.getFacetedMinMaxValues()?.[0] ? `(${column.getFacetedMinMaxValues()?.[0]})` : '' }` }
                                />
                                <TableFilter
                                    type="number"
                                    value={ (columnFilterValue)?.[1] ?? '' }
                                    onChange={ value => column.setFilterValue((old) => [old?.[0], value]) }
                                    placeholder={ `Max ${ column.getFacetedMinMaxValues()?.[1] ? `(${column.getFacetedMinMaxValues()?.[1]})` : '' }` }
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <datalist id={ column.id + 'list' }>
                                {
                                    sortedUniqueValues.slice(0, 5000).map((value, index) => (
                                        <option
                                            key={ index }
                                            value={ value }
                                        />
                                    ))
                                }
                            </datalist>

                            <TableFilter
                                type="text"
                                value={ columnFilterValue ?? '' }
                                onChange={ value =>
                                {
                                    column.setFilterValue(value)
                                    table.options.meta.setCurrent(value ? column.id : null)
                                }}
                                placeholder={ `Search...` }
                                list={ column.id + 'list' }
                            />
                        </>
                    )
                }
            </>
        )
    }
}