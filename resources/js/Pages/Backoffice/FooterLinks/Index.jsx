import { Head, Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";
import Pagination from "@/Shared/Pagination";
import SearchField from "@/Shared/SearchField";

export default function Index({ links, filters }) {
	const settings = {
		link: "/backoffice/footer_links/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ trans('FAQ') } />

			<div className="space-y-4">
				<section id="table-header">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-0 content-start place-content-between">
						<div className="col-span-1 self-center place-self-start">
							<span className="text-xl">
								{ trans('List of :resource', { 'resource': transChoice('common.footer_links', 2) }) }
							</span>
						</div>
						<div className="col-span-1 md:order-2 self-center place-self-end">
							<Link
								className="primary-button whitespace-nowrap"
								href={ route('backoffice.footer_links.create') }
							>
								{ trans('Create :resource', { 'resource': trans('common.new_footer_link') }) }
							</Link>
						</div>
						<div className="col-span-1 sm:col-span-2 md:col-span-1 md:order-1 place-self-center">
							<SearchField filters={ filters } />
						</div>
					</div>
				</section>

				{ links.data.length ? (
					<Table
						data={ links.data }
						settings={ settings }
					/>
				) : (
					<span>
						{ trans('No :resource was found in the database', { 'resource': transChoice('common.footer_links', 1) }) }
					</span>
				)}

				<Pagination data={ links } />
			</div>
		</>
	);
}
