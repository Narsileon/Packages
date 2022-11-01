import { Head } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";

export default function Index({ orders, filters }) {
	const settings = {
		link: "/backoffice/orders/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ t('Orders') } />

			<Table
				title={ t('List of :resource', { 'resource': p('common.orders', 2) }) }
				createLabel={ t('Create :resource', { 'resource': p('common.orders', 1) }) }
				createLink={ route('backoffice.orders.create') }
				collection={ orders }
				settings={ settings }
				filters={ filters }
			/>
		</>
	);
}
