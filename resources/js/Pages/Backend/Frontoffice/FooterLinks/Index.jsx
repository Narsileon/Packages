import { Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import { Table, TableContainer, TableMenu, TableSettings } from "@/Components/Tables";
import BackendPagination from "@/Components/Pagination/BackendPagination";
import AppHead from "@/Shared/AppHead";

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

	const [table] = useTable(footerLinks.data, newHeader, template);

	return (
		<>
			<AppHead title={ transChoice('common.footer_links', 2) } />

			<TableContainer
				title={ trans('List of :resource', { 'resource': transChoice('common.footer_links', 2) }) }
				table={ table }
				buttons={
					<>
						<Link
							className="primary-button whitespace-nowrap"
							href={ route('admin.footer_links.create') }
						>
							{ trans('Create :resource', { 'resource': trans('common.new_footer_link') }) }
						</Link>

						<TableSettings table={ table } />
					</>
				}
			>
				{ footerLinks.meta.items > 0 ? (
					<>
						<Table
							table={ table }
							horizontalScrolling={ true }
						/>

						<BackendPagination data={ footerLinks.meta } />
					</>
				) : (
					<div>
						{ trans('No :resource was found in the database', { 'resource': transChoice('common.footer_links', 1) }) }
					</div>
				)}
			</TableContainer>
		</>
	);
}