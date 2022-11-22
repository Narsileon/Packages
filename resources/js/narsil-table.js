import { useEffect, useState } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { rankItem, compareItems } from '@tanstack/match-sorter-utils'

import {
	getCoreRowModel,
	getFacetedMinMaxValues,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getSortedRowModel,
	sortingFns,
	useReactTable
} from "@tanstack/react-table";

export const useTable = (
	tableData,
	tableColumns,
	template,
	frontend = false,
) => {
	if (template.sizing) {
		tableColumns.forEach(object => {
			if (template.sizing[object.id]) {
				object.size = template.sizing[object.id];
			}
	    });
    }

	const [data, setTableData] = useState(tableData);

    const [columns] = useState(() => [...tableColumns]);

	const [columnFilters, setColumnFilters] = useState(template.columnFilters);
    const [columnOrder, setOrder] = useState(template.order);
	const [columnVisibility, setColumnVisibility] = useState(template.visibility);
	const [globalFilter, setGlobalFilter] = useState(template.globalFilter);
    const [sorting, setSorting] = useState(template.sorting);

	const defaultColumn = {
		minSize: 100,
		maxSize: 300,
	};

    const columnResizeMode = 'onChange';

    const fuzzyFilter = (row, columnId, value, addMeta) => {
		const itemRank = rankItem(row.getValue(columnId), value)

		addMeta({ itemRank })

		return itemRank.passed
	};

    const fuzzySort = (rowA, rowB, columnId) => {
		let dir = 0

		if (rowA.columnFiltersMeta[columnId]) {
		  	dir = compareItems(!rowA.columnFiltersMeta[columnId].itemRank, !rowB.columnFiltersMeta[columnId].itemRank)
		}

		return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
	};

	const table = useReactTable({
		data,
		columns,
		filterFns: {
			fuzzy: fuzzyFilter,
		},
		state: {
			columnFilters,
			columnOrder,
			columnVisibility,
			globalFilter,
			sorting,
		},
		defaultColumn: defaultColumn,
		columnResizeMode: columnResizeMode,
		globalFilterFn: frontend ? fuzzyFilter : null,
		getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: frontend ? getSortedRowModel() : null,
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedMinMaxValues: getFacetedMinMaxValues(),
		onColumnFiltersChange: setColumnFilters,
		onColumnOrderChange: setOrder,
		onColumnVisibilityChange: setColumnVisibility,
		onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
	});

    const tableTemplate = {
        'name': template.name,
		'columnFilters': { ...table.getState().columnFilters },
		'globalFilter': globalFilter,
        'order': columnOrder,
        'sizing': { ...template.sizing, ...table.getState().columnSizing },
        'sorting': { ...table.getState().sorting },
		'visibility': columnVisibility,
    };

	const previousOrder = usePrevious(columnOrder);
	const previousVisiblity = usePrevious(columnVisibility);
	const previousSorting = usePrevious(sorting);
	const previousGlobalFilter = usePrevious(globalFilter);

	useEffect(() => {
		setTableData(tableData);
	}, [tableData]);

	useEffect(() => {
		if (!frontend)
		{
			if (previousGlobalFilter || previousOrder || previousSorting || previousVisiblity) {

				const timeout = setTimeout(() => {
					Inertia.get(route('admin.templates'), {
						'template': tableTemplate,
					}, {
						preserveScroll: true,
						preserveState: true,
					});
				}, 500);

				return () => clearTimeout(timeout)
			}
		}
	}, [columnOrder, columnVisibility, globalFilter, sorting, table.getState().columnSizing]);

    return [table, data, setTableData, globalFilter, setGlobalFilter];
}
