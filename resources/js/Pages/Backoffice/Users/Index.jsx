import { Head } from "@inertiajs/inertia-react";
import { p, t } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";

export default function Index({ users, filters }) {
	const settings = {
		link: "/backoffice/users/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ p('common.users', 2) } />

			<Table
				title={ t('List of :resource', {'resource': p('common.users', 2)}) }
				createLabel={ t('Create :resource', {'resource': t('common.new-user')}) }
				createLink={ route('backoffice.users.create') }
				collection={ users }
				settings={ settings }
				filters={ filters }
			/>
		</>
	);
}
