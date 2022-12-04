import { useMemo } from "react"
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import TableFilter from "@/Components/Tables/TableFilter"
import TableFilterDropdown from "../TableFilterDropdown";

export default function ColumnFilter({
    table,
    column,
}) {
    const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);

    const columnFilterValue = column.getFilterValue();

    const sortedUniqueValues = useMemo(() => {
        return typeof firstValue === 'number' ? [] : Array.from(column.getFacetedUniqueValues().keys()).sort();
    }, [column.getFacetedUniqueValues()]);

    const comparisons = [
        {
            label: 'equal',
            value: 'like',
        },
        {
            label: 'not_equal',
            value: 'not like',
        },
        {
            label: 'less',
            value: '<',
        },
        {
            label: 'less_or_equal',
            value: '<=',
        },
        {
            label: 'greater_or_equal',
            value: '>=',
        },
        {
            label: 'greater',
            value: '>',
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

    function setFilters(label, value) {
        column.setFilterValue((old) => [{...old?.[0], [label]: value}])
    }

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
                            label={ columnFilterValue?.[0]?.['operator1'] ? comparisons.find(x => x.value == columnFilterValue[0]['operator1']).label : comparisons[0].label }
                            setOption={ (option) => setFilters('operator1', option.value) }
                            options={ comparisons }
                        />
                        <TableFilter
                            type={ column.columnDef.type }
                            value={ columnFilterValue?.[0]?.['filter1'] ? columnFilterValue[0]['filter1'] : '' }
                            setData={ (value) =>  setFilters('filter1', value) }
                            list={ column.id + 'list' }
                        />

                        <TableFilterDropdown
                            label={ columnFilterValue?.[0]?.['operator'] ? operations.find(x => x.value == columnFilterValue[0]['operator']).label : operations[0].label }
                            setOption={ (option) => setFilters('operator', option.value) }
                            options={ operations }
                        />

                        <TableFilterDropdown
                            label={ columnFilterValue?.[0]?.['operator2'] ? comparisons.find(x => x.value == columnFilterValue[0]['operator2']).label : comparisons[0].label }
                            setOption={ (option) => setFilters('operator2', option.value) }
                            options={ comparisons }
                        />
                        <TableFilter
                            type={ column.columnDef.type }
                            value={ columnFilterValue?.[0]?.['filter2'] ? columnFilterValue[0]['filter2'] : '' }
                            setData={ (value) => setFilters('filter2', value) }
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
                                            setData={ value => column.setFilterValue((old) => [value, old?.[1]]) }
                                            placeholder={ `Min ${ column.getFacetedMinMaxValues()?.[0] ? `(${column.getFacetedMinMaxValues()?.[0]})` : '' }` }
                                        />
                                        <TableFilter
                                            type="number"
                                            value={ (columnFilterValue)?.[1] ?? '' }
                                            setData={ value => column.setFilterValue((old) => [old?.[0], value]) }
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
                                        setData={ value =>
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