import { Head, Link } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import Table from "@/Components/Tables/Table";
import TableHeader from "@/Components/Tables/TableHeader";
import TableMenu from "@/Components/Tables/TableMenu";
import TableSettings from "@/Components/Tables/TableSettings";
import Pagination from "@/Shared/Pagination";

export default function Index({ faqs, header, template }) {
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

	let [table, , , globalFilter, setGlobalFilter] = useTable(faqs.data, newHeader, template);

	return (
		<>
			<Head title={ trans('FAQ') } />

			<div className="flex flex-col h-full space-y-4">
				<TableHeader
					title={ trans('List of :resource', { 'resource': trans('common.faq') }) }
					filter={ globalFilter }
					setFilter={ setGlobalFilter }
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
						<Table table={ table } />

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
