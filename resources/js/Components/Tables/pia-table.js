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
	const template = tableSettings.custom ?? tableSettings.template;
	const url = tableSettings.custom ? route('admin.userTemplates.update', tableSettings.id) : route('admin.templates.update', tableSettings.id);

  	const [data, setData] = useState(tableData);

    const [columns] = useState(() => [...tableColumns]);

	const [columnFilters, setColumnFilters] = useState(template.columnFilters ?? []);
    const [columnOrder, setColumnOrder] = useState(template.columnOrder ?? []);
	const [columnSizing, setColumnSizing] = useState(template.columnSizing ?? {});
	const [columnVisibility, setColumnVisibility] = useState(template.columnVisibility ?? {});
	const [globalFilter, setGlobalFilter] = useState(template.globalFilter ?? '');
    const [sorting, setSorting] = useState(template.sorting ?? []);

	const [autoUpdate, setAutoUpdate] = useState(template.autoUpdate ?? 10);
	const [current, setCurrent] = useState(template.current ?? '');

	const list = template.list ?? [];

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
		autoResetPageIndex: false,
		manualFiltering: manual,
		manualPagination: manual,
		manualSorting: manual,
		meta: {
			manual,
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
		setData(manual ? [...tableData] : [...table.options.data]);
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
				Inertia.patch(url, {
					...tableSettings,
					[tableSettings.custom ? 'custom' : 'template']: {
						'columnFilters': { ...table.getState().columnFilters },
						'columnOrder': columnOrder,
						'columnSizing': { ...template.sizing, ...table.getState().columnSizing },
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
