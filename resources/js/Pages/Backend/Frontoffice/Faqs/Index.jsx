import { Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import { Table, TableContainer, TableMenu, TableSettings } from "@/Components/Tables";
import BackendPagination from "@/Components/Pagination/BackendPagination";
import AppHead from "@/Shared/AppHead";

export default function Index({ faqs, columns, template }) {
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

	const [table] = useTable(faqs.data, newHeader, template);

	return (
		<>
			<AppHead title={ trans('FAQ') } />

			<TableContainer
				title={ trans('List of :resource', { 'resource': transChoice('common.faqs', 1) }) }
				table={ table }
				buttons={
					<>
						<Link
							className="primary-button whitespace-nowrap"
							href={ route('admin.faqs.create') }
						>
							{ trans('Create :resource', { 'resource': trans('common.new_faq') }) }
						</Link>

						<TableSettings table={ table } />
					</>
				}
			>
				{ faqs.meta.items > 0 ? (
					<>
						<Table
							table={ table }
							horizontalScrolling={ true }
						/>

						<BackendPagination data={ faqs.meta } />
					</>
				) : (
					<div>
						{ trans('No :resource was found in the database', { 'resource': transChoice('common.faqs', 1) }) }
					</div>
				)}
			</TableContainer>
		</>
	);
}
