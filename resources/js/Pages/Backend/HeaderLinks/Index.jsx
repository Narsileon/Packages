import { Head, Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import Table from "@/Components/Tables/Table";
import TableMenu from "@/Components/Tables/TableMenu";
import TableSearch from "@/Components/Tables/TableSearch";
import Pagination from "@/Shared/Pagination";

export default function Index({ headerLinks, header, template }) {
	let newHeader = [...header];

	newHeader.push({
		id: 'menu',
		header: '',
		cell: props => (
			<TableMenu id={ props.row.original.id } />
		)
	})

	const [table, data, setData, globalFilter, setGlobalFilter, newTemplate, sorting] = useTable(headerLinks.data, newHeader, template);

	return (
		<>
			<Head title={ transChoice('common.header_links', 1) } />

			<div className="flex flex-col h-full space-y-4">
				<section id="table-header">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-0 content-start place-content-between">
						<div className="col-span-1 self-center place-self-start">
							<span className="text-xl">
								{ trans('List of :resource', { 'resource': transChoice('common.header_links', 2) }) }
							</span>
						</div>
						<div className="col-span-1 md:order-2 self-center place-self-end">
							<Link
								className="primary-button whitespace-nowrap"
								href={ route('admin.header_links.create') }
							>
								{ trans('Create :resource', { 'resource': trans('common.new_header_link') }) }
							</Link>
						</div>

						<div className="col-span-1 sm:col-span-2 md:col-span-1 md:order-1 place-self-center w-full">
							<TableSearch
								value={ globalFilter ?? '' }
								onChange={ value => setGlobalFilter(value) }
							/>
						</div>
					</div>
				</section>

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
