import Pagination from "@/Shared/Pagination";
import SearchField from "@/Shared/SearchField";
import Table from "@/Components/Tables/Table";
import { Head, Link } from "@inertiajs/inertia-react";

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
			<Head title="Manage" />

			<div className="flex justify-between mb-4">
				<div className="flex items-center">
					<h1 className="text-2xl">
            			Manage roles
					</h1>

					<Link href={ route('backoffice.roles.create') } className="text-green-500 hover:text-green-600 ml-4">
            			Create role
					</Link>
				</div>

				<SearchField filter={ filters.search } />
			</div>

			<Table 
				data={ roles.data }
				columns={ columns } 
				settings={ settings }
			/>

			<Pagination links={roles.meta.links} />
		</>
	);
}
