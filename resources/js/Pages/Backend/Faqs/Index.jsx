import { useEffect, useState } from "react";
import { getCoreRowModel, getFilteredRowModel, getSortedRowModel, sortingFns, useReactTable } from "@tanstack/react-table";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Pagination from "@/Shared/Pagination";
import { usePrevious } from "react-use";
import { upperFirst } from "lodash";
import Icon from "@/Shared/Svg/Icon";
import { rankItem, compareItems } from '@tanstack/match-sorter-utils'
import NewTable from "@/Components/Tables/NewTable";

export default function Index({ faqs, header, template }) {
	const [sorting, setSorting] = useState(template.sorting)

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
		// Rank the item
		const itemRank = rankItem(row.getValue(columnId), value)

		// Store the itemRank info
		addMeta({
		  	itemRank,
		})

		// Return if the item should be filtered in/out
		return itemRank.passed
	}

	const fuzzySort = (rowA, rowB, columnId) => {
		let dir = 0

		// Only sort by rank if the column has ranking information
		if (rowA.columnFiltersMeta[columnId]) {
		  	dir = compareItems(!rowA.columnFiltersMeta[columnId].itemRank, !rowB.columnFiltersMeta[columnId].itemRank)
		}

		// Provide an alphanumeric fallback for when the item ranks are equal
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
		columnResizeMode: 'onChange',
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: fuzzyFilter,
		onColumnOrderChange: setColumnOrder,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		debugTable: true,
		debugHeaders: true,
		debugColumns: true,
	});

	const previous = usePrevious(sorting);

    useEffect(() => {
		if (previous) {
			Inertia.get(route('admin.templates'), {
				'faq_template': {
					'order': columnOrder,
					'sorting': sorting,
					'globalSearch': globalFilter,
					'sizing': { ...template.sizing, ...table.getState().columnSizing },
				},
				'route': 'admin.faqs.index',
			});
		}
	}, [sorting]);

	return (
		<>
			<Head title={ trans('FAQ') } />

			<div className="space-y-4">
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
							<DebouncedInput
								value={ globalFilter ?? '10' }
								onChange={ value => setGlobalFilter(value) }
							/>
						</div>
					</div>
				</section>

				{ faqs.meta.items > 0 ? (
					<>
						<section id="table">
							<div className={ `table-fixed w-fit max-w-full border-2 border-color rounded overflow-x-auto ${ data[0] ? "" : "hidden" }` }>
								<NewTable table={ table } />
							</div>
						</section>

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

// A debounced input react component
const DebouncedInput = ({initialValue, onChange, debounce = 500, ...props}) => {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
	 	setValue(initialValue)
	}, [initialValue])

	useEffect(() => {
		const timeout = setTimeout(() => {
			onChange(value)
	}, debounce)

	  	return () => clearTimeout(timeout)
	}, [value])

	return (
		<div className="flex border-2 border-color rounded">
			<div className="primary-background flex items-center w-min-fit justify-between">
				<Icon name="search" className="w-6 h-6 m-2" />
			</div>

			<input
				value={ value }
				type="text"
				placeholder={ `${ upperFirst(trans('common.search')) }...` }
				autoComplete="off"
				onChange={ e => setValue(e.target.value) }
				className="bg-transparent focus:outline-none p-2 w-full"
				{ ...props }
			/>
		</div>
	)
  }
