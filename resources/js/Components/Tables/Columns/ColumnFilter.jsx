import { useMemo } from "react"
import TableFilter from "@/Components/Tables/TableFilter"
import TableFilterDropdown from "../TableFilterDropdown";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";

export default function ColumnFilter({
    table,
    column,
}) {
    const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);

    const columnFilterValue = column.getFilterValue();

    const sortedUniqueValues = useMemo(() => {
        return typeof firstValue === 'number' ? [] : Array.from(column.getFacetedUniqueValues().keys()).sort();
    }, [column.getFacetedUniqueValues()]);

    const comparaisons = [
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

    const operations = [
        {
            label: 'and',
            value: '&&',
        },
        {
            label: 'or',
            value: '||',
        },
    ];

    function deleteFilters() {
        column.setFilterValue();
    }

    return (
        <section className="space-y-2 font-normal">
            <h1 className="text-left font-bold">
                { upperFirst(transChoice('common.filters', 2)) }
            </h1>

            <hr className="border-color" />

            {
                table.options.manualFiltering ? (
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
                        <TableFilterDropdown
                            value={ (columnFilterValue)?.[0] ?? '' }
                            setValue={ value => column.setFilterValue((old) => [value, old?.[0]]) }
                            options={ comparaisons }
                        />
                        <TableFilter
                            type="number"
                            value={ (columnFilterValue)?.[0] ?? '' }
                            onChange={ value => column.setFilterValue((old) => [value, old?.[0]]) }
                            list={ column.id + 'list' }
                        />

                        <TableFilterDropdown
                            value={ (columnFilterValue)?.[1] ?? '' }
                            setValue={ value => column.setFilterValue((old) => [value, old?.[1]]) }
                            options={ operations }
                        />

                        <TableFilterDropdown
                            value={ (columnFilterValue)?.[2] ?? '' }
                            setValue={ value => column.setFilterValue((old) => [value, old?.[2]]) }
                            options={ comparaisons }
                        />
                        <TableFilter
                            type="number"
                            value={ (columnFilterValue)?.[2] ?? '' }
                            onChange={ value => column.setFilterValue((old) => [old?.[2], value]) }
                            list={ column.id + 'list' }
                        />
                    </>
                ) : (
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

            <hr className="border-color" />

            <button
                className="primary-button w-full"
                onClick={ deleteFilters }
            >
                { trans('Delete the filters') }
            </button>
        </section>
    );
}