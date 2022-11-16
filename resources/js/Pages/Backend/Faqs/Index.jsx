import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { Head, Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Pagination from "@/Shared/Pagination";
import SearchField from "@/Shared/SearchField";

export default function Index({ faqs, filters }) {
	const [sorting, setSorting] = useState()

	const defaultColumns = [
		{
			accessorKey: 'id',
			id: 'id',
			header: trans('common.id'),
		},
		{
			accessorKey: 'question',
			id: 'question',
			header: transChoice('common.questions', 1),
		},
		{
			accessorKey: 'answer',
			id: 'answer',
			header: transChoice('common.answers', 1),
		},
	];

	const [data, setData] = useState(faqs.data);

	const [columns] = useState(() => [...defaultColumns]);
	const [columnOrder, setColumnOrder] = useState(
		columns.map(column => column.id)
	)

	const table = useReactTable({
		data,
		columns,
		state: {
			columnOrder,
			sorting,
		},
		onColumnOrderChange: setColumnOrder,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
	})

	const reorderColumn = (draggedColumnId, targetColumnId, columnOrder) => {
		console.log(draggedColumnId);

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
				ref={ dropRef }
				colSpan={ header.colSpan }
				style={{ opacity: isDragging ? 0.5 : 1 }}
			>
				<div ref={ previewRef }>
					{ header.isPlaceholder
						? null
						: flexRender(header.column.columnDef.header, header.getContext())
					}
					<button ref={ dragRef }>
						drag
					</button>
				</div>
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
							<SearchField filters={ filters } />
						</div>
					</div>
				</section>

				{ faqs.meta.items > 0 ? (
					<>
						<section id="table">
							<div
								className={ `border-2 border-color rounded overflow-x-auto ${ data[0] ? "" : "hidden" }` }
								ref={ table }
							>
								<table>
									<thead>
										{
											table.getHeaderGroups().map(headerGroup => (
												<tr key={headerGroup.id}>
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
															<td key={ cell.id }>
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
