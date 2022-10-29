import { Head, Link } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";
import SearchField from "@/Shared/SearchField";

export default function Index({ faqs, filters }) {
	const columns = [
		{ label: "#", accessor: "id", sortable: true },
		{ label: "question", accessor: "question", sortable: true },
	];

	const settings = {
		link: "/backoffice/faqs/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ t('Manage faqs') } />

			<div className="flex justify-between mb-4">
				<div className="flex items-center">
					<h1 className="text-2xl">
						{ t('List of :resource', { 'resource': t('FAQ') }) }
					</h1>

					<Link href="/backoffice/faqs/create" className="text-green-500 hover:text-green-600 ml-4">
						{ t('Create :resource', { 'resource': t('FAQ') }) }
					</Link>
				</div>

				<SearchField filters={ filters } />
			</div>

			<Table
				collection={ faqs }
				columns={ columns }
				settings={ settings }
			/>
		</>
	);
}
