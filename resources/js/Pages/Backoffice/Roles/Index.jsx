import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";
import Pagination from "@/Shared/Pagination";

export default function Index({ roles, filters }) {
	const settings = {
		link: "/backoffice/roles/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={transChoice('permissions.roles', 2) } />

			<Table
				title={ trans('List of :resource', {'resource':transChoice('permissions.roles', 2)}) }
				createLabel={ trans('Create :resource', {'resource': trans('permissions.new_role')}) }
				createLink={ route('backoffice.roles.create') }
				collection={ roles }
				settings={ settings }
				filters={ filters }
			/>

			<section id="pagination">
				<Pagination data={ roles.meta } />
			</section>
		</>
	);
}
