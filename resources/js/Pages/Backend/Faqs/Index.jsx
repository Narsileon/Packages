import { useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Pagination from "@/Shared/Pagination";
import { usePrevious } from "react-use";
import Table from "@/Components/Tables/Table";
import TableSearch from "@/Components/Tables/TableSearch";
import { useTable } from "@/narsil-table";

export default function Index({ faqs, header, template }) {
	const [table, data, setData, globalFilter, setGlobalFilter, newTemplate, sorting] = useTable(faqs.data, header, template);

	const previous = usePrevious(sorting);

    useEffect(() => {
		if (previous) {
			const timeout = setTimeout(() => {
				Inertia.get(route('admin.templates'), {
					'template': newTemplate,
					'route': 'admin.faqs.index',
				});
			}, 0);

			return () => clearTimeout(timeout)
		}
	}, [sorting]);

	return (
		<>
			<Head title={ trans('FAQ') } />

			<div className="flex flex-col h-full space-y-4">
				<section id="table-header">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-0 content-start place-content-between">
						<div className="col-span-1 self-center place-self-start">
							<span className="text-xl">
								{ trans('List of :resource', { 'resource': trans('common.faq') }) }
							</span>
						</div>
						<div className="col-span-1 md:order-2 self-center place-self-end">
							<Link
								className="primary-button whitespace-nowrap"
								href={ route('admin.faqs.create') }
							>
								{ trans('Create :resource', { 'resource': trans('common.new_faq') }) }
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
