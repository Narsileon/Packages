import { Head, Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import Table from "@/Components/Tables/Table";
import TableHeader from "@/Components/Tables/TableHeader";
import TableMenu from "@/Components/Tables/TableMenu";
import Pagination from "@/Shared/Pagination";

export default function Index({ headerLinks, header, template }) {
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

	const [table, , , globalFilter, setGlobalFilter] = useTable(headerLinks.data, newHeader, template);

	return (
		<>
			<Head title={ transChoice('common.header_links', 1) } />

			<div className="flex flex-col h-full space-y-4">
				<TableHeader
					title={ trans('List of :resource', { 'resource': transChoice('common.header_links', 2) }) }
					filter={ globalFilter }
					setFilter={ setGlobalFilter }
				>
					<Link
						className="primary-button whitespace-nowrap"
						href={ route('admin.header_links.create') }
					>
						{ trans('Create :resource', { 'resource': trans('common.new_header_link') }) }
					</Link>
				</TableHeader>

				{ headerLinks.meta.items > 0 ? (
					<>
						<Table table={ table } />

						<Pagination data={ headerLinks.meta } />
					</>
				) : (
					<div>
						{ trans('No :resource was found in the database', { 'resource': transChoice('common.header_links', 1) }) }
					</div>
				)}
			</div>
		</>
	);
}
