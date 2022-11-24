import { Head, Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import Table from "@/Components/Tables/Table";
import TableHeader from "@/Components/Tables/TableHeader";
import TableMenu from "@/Components/Tables/TableMenu";
import TableSettings from "@/Components/Tables/TableSettings";
import Pagination from "@/Shared/Pagination";

export default function Index({ footerLinks, columns, template }) {
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

	const [table, , , globalFilter, setGlobalFilter] = useTable(footerLinks.data, newHeader, template);

	return (
		<>
			<Head title={ transChoice('common.footer_links', 1) } />

			<div className="flex flex-col h-full space-y-4">
				<TableHeader
					title={ trans('List of :resource', { 'resource': transChoice('common.footer_links', 2) }) }
					filter={ globalFilter }
					setFilter={ setGlobalFilter }
				>
					<Link
						className="primary-button whitespace-nowrap"
						href={ route('admin.footer_links.create') }
					>
						{ trans('Create :resource', { 'resource': trans('common.new_footer_link') }) }
					</Link>
					<TableSettings
						table={ table }
						autoUpdate={ autoUpdate }
						setAutoUpdate={ setAutoUpdate }
					/>
				</TableHeader>

				{ footerLinks.meta.items > 0 ? (
					<>
						<Table table={ table } />

						<Pagination data={ footerLinks.meta } />
					</>
				) : (
					<div>
						{ trans('No :resource was found in the database', { 'resource': transChoice('common.footer_links', 1) }) }
					</div>
				)}
			</div>
		</>
	);
}
