import { Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import Table from "@/Components/Tables/Table";
import TableHeader from "@/Components/Tables/TableHeader";
import TableMenu from "@/Components/Tables/TableMenu";
import TableSettings from "@/Components/Tables/TableSettings";
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

			<div className="flex flex-col h-full space-y-4">
				<TableHeader
					title={ trans('List of :resource', { 'resource': transChoice('common.faqs', 1) }) }
					table={ table }
				>
					<Link
						className="primary-button whitespace-nowrap"
						href={ route('admin.faqs.create') }
					>
						{ trans('Create :resource', { 'resource': trans('common.new_faq') }) }
					</Link>

					<TableSettings table={ table } />
				</TableHeader>

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
			</div>
		</>
	);
}
