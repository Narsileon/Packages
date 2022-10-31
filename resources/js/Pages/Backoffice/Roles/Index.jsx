import { Head } from "@inertiajs/inertia-react";
import { p, t } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";

export default function Index({ roles, filters }) {
	const settings = {
		link: "/backoffice/roles/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ p('permissions.roles', 2) } />

			<Table
				title={ t('List of :resource', {'resource': p('permissions.roles', 2)}) }
				createLabel={ t('Create :resource', {'resource': t('permissions.new-role')}) }
				createLink={ route('backoffice.roles.create') }
				collection={ roles }
				settings={ settings }
				filters={ filters }
			/>
		</>
	);
}
