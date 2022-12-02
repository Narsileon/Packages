import { useEffect, useState } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { rankItem } from '@tanstack/match-sorter-utils'

import {
	getCoreRowModel,
	getFacetedMinMaxValues,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from "@tanstack/react-table";

export const useTable = (
	tableData,
	tableColumns,
	tableSettings,
	manual = true,
) => {
	if (!tableColumns) {
		return [];
	}

  	const [data, setData] = useState(tableData);

    const [columns] = useState(() => [...tableColumns]);

	const [columnFilters, setColumnFilters] = useState(tableSettings.template.columnFilters ?? []);
    const [columnOrder, setColumnOrder] = useState(tableSettings.template.columnOrder ?? []);
	const [columnSizing, setColumnSizing] = useState(tableSettings.template.columnSizing ?? {});
	const [columnVisibility, setColumnVisibility] = useState(tableSettings.template.columnVisibility ?? {});
	const [globalFilter, setGlobalFilter] = useState(tableSettings.template.globalFilter ?? '');
    const [sorting, setSorting] = useState(tableSettings.template.sorting ?? []);

	const [autoUpdate, setAutoUpdate] = useState(tableSettings.template.autoUpdate ?? 10);
	const [current, setCurrent] = useState(tableSettings.template.current ?? '');

	const list = tableSettings.template.list ?? [];

	const table = useReactTable({
		data,
		columns,
		state: {
			autoUpdate,
			current,
			columnFilters,
			columnOrder,
			columnSizing,
			columnVisibility,
			list,
			globalFilter,
			sorting,
		},
		defaultColumn: {
			minSize: 100,
			maxSize: 300,
		},
		columnResizeMode: 'onChange',
		filterFns: {
			fuzzy: fuzzyFilter,
		},
		getCoreRowModel: getCoreRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedMinMaxValues: getFacetedMinMaxValues(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		globalFilterFn: fuzzyFilter,
		onColumnFiltersChange: setColumnFilters,
		onColumnOrderChange: setColumnOrder,
		onColumnSizingChange: setColumnSizing,
		onColumnVisibilityChange: setColumnVisibility,
		onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
		manualFiltering: manual,
		manualPagination: manual,
		manualSorting: manual,
		meta: {
			setAutoUpdate,
			setCurrent,
			setData,
		},
	});

	const previousColumnFilters = usePrevious(columnFilters);
	const previousColumnOrder = usePrevious(columnOrder);
	const previousColumnVisiblity = usePrevious(columnVisibility);
	const previousGlobalFilter = usePrevious(globalFilter);
	const previousSorting = usePrevious(sorting);

	const previousCurrent = usePrevious(current);

	useEffect(() => {
		if (tableData.length > 0) {
			setData(tableData);
		}
	}, [tableData]);

	useEffect(() => {
		if (
			previousColumnFilters ||
			previousColumnOrder ||
			previousColumnVisiblity ||
			previousGlobalFilter ||
			previousSorting ||
			previousCurrent
		) {
			const timeout = setTimeout(() => {
				Inertia.patch('/admin/user_templates/' + tableSettings.id, {
					...tableSettings,
					'template': {
						'columnFilters': { ...table.getState().columnFilters },
						'columnOrder': columnOrder,
						'columnSizing': { ...tableSettings.template.sizing, ...table.getState().columnSizing },
						'columnVisibility': columnVisibility,
						'globalFilter': globalFilter,
						'sorting': { ...table.getState().sorting },
						'autoUpdate': autoUpdate,
						'current': current,
					},
				}, {
					preserveScroll: true,
					preserveState: true,
				});
			}, 500);

			return () => clearTimeout(timeout)
		}
	}, [
		autoUpdate,
		columnFilters,
		columnOrder,
		columnVisibility,
		current,
		globalFilter,
		sorting,
		table.getState().columnSizing
	]);

    return [table];
}

function fuzzyFilter(row, columnId, value, addMeta) {
	const itemRank = rankItem(row.getValue(columnId), value)

	addMeta({ itemRank })

	return itemRank.passed
};
