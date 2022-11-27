import { Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import { Table, TableContainer, TableMenu, TableSettings } from "@/Components/Tables";
import BackendPagination from "@/Components/Pagination/BackendPagination";
import AppHead from "@/Shared/AppHead";

export default function Index({ headerLinks, columns, template }) {
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

	const [table] = useTable(headerLinks.data, newHeader, template);

	return (
		<>
			<AppHead title={ transChoice('common.header_links', 2) } />

			<TableContainer
				title={ trans('List of :resource', { 'resource': transChoice('common.header_links', 2) }) }
				table={ table }
				buttons={
					<>
						<Link
							className="primary-button whitespace-nowrap"
							href={ route('admin.header_links.create') }
						>
							{ trans('Create :resource', { 'resource': trans('common.new_header_link') }) }
						</Link>

						<TableSettings table={ table } />
					</>
				}
			>
				{ headerLinks.meta.items > 0 ? (
					<>
						<Table
							table={ table }
							horizontalScrolling={ true }
						/>

						<BackendPagination data={ headerLinks.meta } />
					</>
				) : (
					<div>
						{ trans('No :resource was found in the database', { 'resource': transChoice('common.header_links', 1) }) }
					</div>
				)}
			</TableContainer>
		</>
	);
}
