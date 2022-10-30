import { Head, Link } from "@inertiajs/inertia-react";
import { p, t } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";
import SearchField from "@/Shared/SearchField";

export default function Index({ roles, filters }) {
	const columns = [
		{ label: "#", accessor: "id", sortable: true },
		{ label: "Name", accessor: "name", sortable: true },
	];

	const settings = {
		link: "/backoffice/roles/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ p('permissions.roles', 2) } />

			<div className="flex justify-between mb-4">
				<div className="flex items-end">
					<h1 className="text-2xl">
						{ t('List of :resource', {'resource': p('permissions.roles', 2)}) }
					</h1>

					<Link href={ route('backoffice.roles.create') } className="text-green-500 hover:text-green-600 ml-4">
						{ t('Create :resource', {'resource': t('permissions.new-role')}) }
					</Link>
				</div>

				<SearchField filters = { filters } />
			</div>

			<Table
				collection={ roles }
				columns={ columns }
				settings={ settings }
			/>
		</>
	);
}
