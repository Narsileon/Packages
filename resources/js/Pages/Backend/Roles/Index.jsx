import { Head, Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import Table from "@/Components/Tables/Table";
import TableHeader from "@/Components/Tables/TableHeader";
import TableMenu from "@/Components/Tables/TableMenu";
import TableSettings from "@/Components/Tables/TableSettings";
import Pagination from "@/Shared/Pagination";

export default function Index({ roles, header, template }) {
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

	const [table, , , globalFilter, setGlobalFilter] = useTable(roles.data, newHeader, template);

	return (
		<>
			<Head title={ transChoice('permissions.roles', 2) } />

			<div className="flex flex-col h-full space-y-4">
				<TableHeader
					title={ trans('List of :resource', {'resource': transChoice('permissions.roles', 2)}) }
					filter={ globalFilter }
					setFilter={ setGlobalFilter }
				>
					<Link
						className="primary-button whitespace-nowrap"
						href={ route('admin.roles.create') }
					>
						{ trans('Create :resource', {'resource': trans('permissions.new_role')}) }
					</Link>
					<TableSettings table={ table } />
				</TableHeader>

				{ roles.meta.items > 0 ? (
					<>
						<Table table={ table } />

						<Pagination data={ roles.meta } />
					</>
				) : (
					<div>
						{ trans('No :resource was found in the database', { 'resource': transChoice('permissions.roles', 1) }) }
					</div>
				)}
			</div>
		</>
	);
}
