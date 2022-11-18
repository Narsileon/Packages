import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, sortingFns, useReactTable } from "@tanstack/react-table";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Pagination from "@/Shared/Pagination";
import { usePrevious } from "react-use";
import { upperFirst } from "lodash";
import Icon from "@/Shared/Svg/Icon";
import Sort from "@/Shared/Svg/Sort";
import { rankItem, compareItems } from '@tanstack/match-sorter-utils'

export default function Index({ faqs, header, template }) {
	const [sorting, setSorting] = useState(template.sorting)

	const [columnResizeMode, setColumnResizeMode] = useState('onChange')

	const [globalFilter, setGlobalFilter] = useState('');

	const [data, setData] = useState(faqs.data);

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
		columnResizeMode,
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
				},
				'route': 'admin.faqs.index',
			});
		}
	}, [sorting]);

	const reorderColumn = (draggedColumnId, targetColumnId, columnOrder) => {
		columnOrder.splice(columnOrder.indexOf(targetColumnId), 0, columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0]);

		return [...columnOrder];
	}

	const DraggableColumnHeader = ({ header, table }) => {
		const { getState, setColumnOrder } = table
		const { columnOrder } = getState()
		const { column } = header

		const [, dropRef] = useDrop({
		  	accept: 'column',
		  	drop: (draggedColumn) => {
				const newColumnOrder = reorderColumn(draggedColumn.id, column.id, columnOrder);

				setColumnOrder(newColumnOrder);
		 	},
		})

		const [{ isDragging }, dragRef, previewRef] = useDrag({
			collect: monitor => ({
				isDragging: monitor.isDragging(),
			}),
			item: () => column,
			type: 'column',
		})

		return (
			<th
				className="relative"
				ref={ dropRef }
				colSpan={ header.colSpan }
				style={{ opacity: isDragging ? 0.5 : 1, width: header.getSize() }}
			>
				<div
					className="flex"
					ref={ previewRef }
				>
					<button
						className="ml-2"
						ref={ dragRef }
					>
						<Icon className="w-6 h-6" name="sort-horizontal" />
					</button>
					<div
                        {...{
							className: `flex justify-between w-full p-2 whitespace-nowrap space-x-2 ${ header.column.getCanSort()
								? 'cursor-pointer select-none'
								: '' }`,
							onClick: header.column.getToggleSortingHandler(),
                        }}
                    >
						<span>
							{
								flexRender(
									upperFirst(transChoice(header.column.columnDef.header, 1)),
									header.getContext()
								)
							}
						</span>
                        {
							{
								asc: <Sort className="w-5 h-5" order="asc" />,
								desc: <Sort className="w-5 h-5" order="desc" />,
                        	} [header.column.getIsSorted()] ?? <Sort className="w-5 h-5" />
						}
					</div>
				</div>
				<div
					{...{
						onMouseDown: header.getResizeHandler(),
						onTouchStart: header.getResizeHandler(),
						className: `absolute right-0 top-0 h-full w-2 cursor-col-resize ${
						header.column.getIsResizing() ? 'bg-red-500' : 'bg-blue-500'
						}`,
						style: {
							transform:
								columnResizeMode === 'onEnd' && header.column.getIsResizing() ?
								`translateX(${table.getState().columnSizingInfo.deltaOffset}px)` : '',
						},
					}}
				/>
			</th>
		)
	}

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
								value={ globalFilter ?? '' }
								onChange={value => setGlobalFilter(value)}
							/>
						</div>
					</div>
				</section>

				{ faqs.meta.items > 0 ? (
					<>
						<section id="table">
							<div className={ `table-fixed w-fit max-w-full border-2 border-color rounded overflow-x-auto ${ data[0] ? "" : "hidden" }` }>
								<table
									style={{ width: table.getCenterTotalSize() }}
								>
									<thead>
										{
											table.getHeaderGroups().map(headerGroup => (
												<tr key={ headerGroup.id }>
													{
														headerGroup.headers.map(header => (
															<DraggableColumnHeader
																key={ header.id }
																header={ header }
																table={ table }
															/>
														))
													}
												</tr>
											))
										}
									</thead>
									<tbody>
										{
											table.getRowModel().rows.map(row => (
												<tr key={ row.id }>
													{
														row.getVisibleCells().map(cell => (
															<td
															{...{
															  	key: cell.id,
															  	style: {
																width: cell.column.getSize(),
															  },
															}}
														  >
																{ flexRender(cell.column.columnDef.cell, cell.getContext()) }
															</td>
														))
													}
												</tr>
											))
										}
									</tbody>
								</table>
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
