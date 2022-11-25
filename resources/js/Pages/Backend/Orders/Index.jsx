import { Head, Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import Table from "@/Components/Tables/Table";
import TableHeader from "@/Components/Tables/TableHeader";
import TableMenu from "@/Components/Tables/TableMenu";
import TableSettings from "@/Components/Tables/TableSettings";
import Pagination from "@/Shared/Pagination";

export default function Index({ orders, columns, template, list }) {
	let newHeader = [...columns];

	newHeader.push({
		id: 'menu',
		header: '',
		cell: props => (
			<TableMenu id={ props.row.original.id } />
		),
		maxSize: 50,
		disableOrderBy: true,
		disableSortBy: true,
	})

	const [table] = useTable(orders.data, newHeader, template);

	return (
		<>
			<Head title={ transChoice('common.orders', 2) } />

			<div className="flex flex-col h-full space-y-4">
				<TableHeader
					title={ trans('List of :resource', { 'resource': transChoice('common.orders', 2) }) }
					table={ table }
				>
					<Link
						className="primary-button whitespace-nowrap"
						href={ route('admin.orders.create') }
					>
						{ trans('Create :resource', { 'resource': trans('common.new_order') }) }
					</Link>

					<TableSettings table={ table } />
				</TableHeader>

				{ orders.meta.items > 0 ? (
					<>
						<Table
							table={ table }
							horizontalScrolling={ true }
						/>

						<Pagination data={ orders.meta } />
					</>
				) : (
					<div>
						{ trans('No :resource was found in the database', { 'resource': transChoice('common.orders', 1) }) }
					</div>
				)}
			</div>
		</>
	);
}
