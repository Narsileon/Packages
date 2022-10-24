import { Head, Link } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";
import SearchField from "@/Shared/SearchField";

export default function Index({ users, filters }) {
	const columns = [
		{ 
			label: "#", 
			accessor: "id", 
			sortable: true 
		},
		{ 
			label: "Username", 
			accessor: "username", 
			sortable: true 
		},
		{ 
			label: "Email", 
			accessor: "email", 
			sortable: true 
		},
	];

	const settings = { 
		link: "/backoffice/users/",
		editable: true, 
		deletable: true,
	};

	return (
		<>
			<Head title={ t("Users") } />

			<div className="flex justify-between mb-4">
				<div className="flex items-center">
					<h1 className="text-2xl">
            			Manage users
					</h1>

					<Link href={ route('backoffice.users.create') } className="text-green-500 hover:text-green-600 ml-4">
            			Create user
					</Link>
				</div>

				<SearchField filters={ filters } />
			</div>

			<Table 
				collection={ users }
				columns={ columns } 
				settings={ settings }
			/>
		</>
	);
}
