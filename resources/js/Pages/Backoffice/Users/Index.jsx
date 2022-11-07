import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";
import Pagination from "@/Shared/Pagination";

export default function Index({ users, filters }) {
	const settings = {
		link: "/backoffice/users/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={transChoice('common.users', 2) } />

			<Table
				title={ trans('List of :resource', {'resource':transChoice('common.users', 2)}) }
				createLabel={ trans('Create :resource', {'resource': trans('common.new_user')}) }
				createLink={ route('backoffice.users.create') }
				collection={ users }
				settings={ settings }
				filters={ filters }
			/>

			<section id="pagination">
				<Pagination data={ users.meta } />
			</section>
		</>
	);
}
