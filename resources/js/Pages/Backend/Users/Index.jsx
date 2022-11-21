import { Head, Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import Table from "@/Components/Tables/Table";
import TableHeader from "@/Components/Tables/TableHeader";
import TableMenu from "@/Components/Tables/TableMenu";
import Pagination from "@/Shared/Pagination";

export default function Index({ users, header, template }) {
	let newHeader = [...header];

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

	const [table, , , globalFilter, setGlobalFilter] = useTable(users.data, newHeader, template);

	return (
		<>
			<Head title={ transChoice('common.users', 1) } />

			<div className="flex flex-col h-full space-y-4">
				<TableHeader
					title={ trans('List of :resource', {'resource': transChoice('common.users', 2)}) }
					filter={ globalFilter }
					setFilter={ setGlobalFilter }
				>
					<Link
						className="primary-button whitespace-nowrap"
						href={ route('admin.users.create') }
					>
						{ trans('Create :resource', {'resource': trans('common.new_user')}) }
					</Link>
				</TableHeader>

				{ users.meta.items > 0 ? (
					<>
						<Table table={ table } />

						<Pagination data={ users.meta } />
					</>
				) : (
					<div>
						{ trans('No :resource was found in the database', { 'resource': transChoice('common.users', 1) }) }
					</div>
				)}
			</div>
		</>
	);
}
