import { useState } from "react";
import { getCoreRowModel, getFilteredRowModel, getSortedRowModel, sortingFns, useReactTable } from "@tanstack/react-table";
import { rankItem, compareItems } from '@tanstack/match-sorter-utils'

export const useTable = (tableData, tableColumns, template) => {
	if (template.sizing) {
		tableColumns.forEach(object => {
			if (template.sizing[object.id]) {
				object.size = template.sizing[object.id];
			}
	    });
    }

	const [data, setTableData] = useState(tableData);
    const [columns] = useState(() => [...tableColumns]);
    const [globalFilter, setGlobalFilter] = useState(template.globalFilter);
    const [columnOrder, setOrder] = useState(template.order);
    const [sorting, setSorting] = useState(template.sorting)

	const defaultColumn = {
		minSize: 100,
		maxSize: 300,
	}

    const columnResizeMode = 'onChange'

    const fuzzyFilter = (row, columnId, value, addMeta) => {
		const itemRank = rankItem(row.getValue(columnId), value)

		addMeta({ itemRank })

		return itemRank.passed
	}

    const fuzzySort = (rowA, rowB, columnId) => {
		let dir = 0

		if (rowA.columnFiltersMeta[columnId]) {
		  	dir = compareItems(!rowA.columnFiltersMeta[columnId].itemRank, !rowB.columnFiltersMeta[columnId].itemRank)
		}

		return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
	}

	const table = useReactTable({
		data,
		columns,
		filterFns: {
			fuzzy: fuzzyFilter,
		},
		state: {
            globalFilter,
			columnOrder,
			sorting,
		},
		defaultColumn: defaultColumn,
		columnResizeMode: columnResizeMode,
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: fuzzyFilter,
		getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
        onColumnOrderChange: setOrder,
        onSortingChange: setSorting,
	});

    const tableTemplate = {
        'name': template.name,
        'order': columnOrder,
        'sizing': { ...template.sizing, ...table.getState().columnSizing },
        'sorting': sorting,
        'globalSearch': globalFilter,
    };

    return [table, data, setTableData, globalFilter, setGlobalFilter, tableTemplate, sorting];
}