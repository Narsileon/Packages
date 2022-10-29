import { Head, Link } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";
import SearchField from "@/Shared/SearchField";

export default function Index({ questions, filters }) {
	const columns = [
		{ label: "#", accessor: "id", sortable: true },
		{ label: "question", accessor: "question", sortable: true },
	];

	const settings = { 
		link: "/backoffice/questions/",
		editable: true, 
		deletable: true,
	};

	return (
		<>
			<Head title={ t('Manage questions') } />

			<div className="flex justify-between mb-4">
				<div className="flex items-center">
					<h1 className="text-2xl">
						{ t('Manage categories') }
					</h1>

					<Link href="/backoffice/questions/create" className="text-green-500 hover:text-green-600 ml-4">
						{ t('Create question') }
					</Link>
				</div>

				<SearchField filters={ filters } />
			</div>

			<Table 
				collection={ questions }
				columns={ columns } 
				settings={ settings }
			/>
		</>
	);
}
