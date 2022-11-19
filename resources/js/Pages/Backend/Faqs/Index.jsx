import { useEffect, useState } from "react";
import { getCoreRowModel, getFilteredRowModel, getSortedRowModel, sortingFns, useReactTable } from "@tanstack/react-table";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Pagination from "@/Shared/Pagination";
import { usePrevious } from "react-use";
import { rankItem, compareItems } from '@tanstack/match-sorter-utils'
import NewTable from "@/Components/Tables/NewTable";
import TableSearch from "@/Components/Tables/TableSearch";

export default function Index({ faqs, header, template }) {
	const [sorting, setSorting] = useState(template.sorting)

	const defaultColumnSizing = {
		minSize: 100,
		maxSize: 300,
	}

	const [globalFilter, setGlobalFilter] = useState('');

	const [data, setData] = useState(faqs.data);

	if (template.sizing) {
		header.forEach(object => {
			if (template.sizing[object.id]) {
				object.size = template.sizing[object.id];
			}
		});
	}

	const [columns] = useState(() => [...header]);
	const [columnOrder, setColumnOrder] = useState(template.order);

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
			columnOrder,
			globalFilter,
			sorting,
		},
		defaultColumn: defaultColumnSizing,
		columnResizeMode: 'onChange',
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: fuzzyFilter,
		onColumnOrderChange: setColumnOrder,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
	});

	const previous = usePrevious(sorting);

    useEffect(() => {
		if (previous) {
			const timeout = setTimeout(() => {
				Inertia.get(route('admin.templates'), {
					'faq_template': {
						'order': columnOrder,
						'sorting': sorting,
						'globalSearch': globalFilter,
						'sizing': { ...template.sizing, ...table.getState().columnSizing },
					},
					'route': 'admin.faqs.index',
					'template': 'faq_template',
				});
			}, 0);

			return () => clearTimeout(timeout)
		}
	}, [sorting]);

	return (
		<>
			<Head title={ trans('FAQ') } />

			<div className="flex flex-col h-full space-y-4">
				<section id="table-header">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-0 content-start place-content-between">
						<div className="col-span-1 self-center place-self-start">
							<span className="text-xl">
								{ trans('List of :resource', { 'resource': trans('common.faq') }) }
							</span>
						</div>
						<div className="col-span-1 md:order-2 self-center place-self-end">
							<Link
								className="primary-button whitespace-nowrap"
								href={ route('admin.faqs.create') }
							>
								{ trans('Create :resource', { 'resource': trans('common.new_faq') }) }
							</Link>
						</div>

						<div className="col-span-1 sm:col-span-2 md:col-span-1 md:order-1 place-self-center w-full">
							<TableSearch
								value={ globalFilter ?? '' }
								onChange={ value => setGlobalFilter(value) }
							/>
						</div>
					</div>
				</section>

				{ faqs.meta.items > 0 ? (
					<>
						<NewTable table={ table } />

						<Pagination data={ faqs.meta } />
					</>
				) : (
					<div>
						{ trans('No :resource was found in the database', { 'resource': trans('common.faq') }) }
					</div>
				)}
			</div>
		</>
	);
}
