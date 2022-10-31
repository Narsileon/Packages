import { Head, Link } from "@inertiajs/inertia-react";
import { p, t } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";
import SearchField from "@/Shared/SearchField";

export default function Index({ users, filters }) {
	const settings = {
		link: "/backoffice/users/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ p('common.users', 2) } />

			<div className="md:flex md:justify-between mb-4">
				<div className="md:flex md:items-end">
					<h1 className="text-2xl">
						{ t('List of :resource', {'resource': p('common.users', 2)}) }
					</h1>

					<Link href={ route('backoffice.users.create') } className="text-green-500 hover:text-green-600 ml-4">
            			{ t('Create :resource', {'resource': t('common.new-user')}) }
					</Link>
				</div>

				<SearchField filters={ filters } />
			</div>

			<Table
				collection={ users }
				settings={ settings }
			/>
		</>
	);
}
