import { useMemo } from "react"
import TableFilter from "@/Components/Tables/TableFilter"

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

    return (
        typeof firstValue === 'number' ? (
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
                {
                    table.options.manualFiltering && table.getState().current == column.id && table.getState().list ? (
                        <datalist id={ column.id + 'list' }>
                            {
                                table.getState().list.slice(0, 5000).map((value, index) => (
                                    <option
                                        key={ index }
                                        value={ value }
                                    />
                                ))
                            }
                        </datalist>
                    ) : (
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
                    )
                }

                <TableFilter
                    type="text"
                    value={ columnFilterValue ?? '' }
                    onChange={ value => column.setFilterValue(value) }
                    onFocus={ () => table.options.meta.setCurrent(column.id) }
                    placeholder={ `Search... (${ column.getFacetedUniqueValues().size })` }
                    list={ column.id + 'list' }
                />
            </>
        )
    )
}