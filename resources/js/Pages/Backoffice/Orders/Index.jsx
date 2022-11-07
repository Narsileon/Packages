import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";

export default function Index({ orders, filters }) {
	const settings = {
		link: "/backoffice/orders/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ trans('Orders') } />

			<Table
				title={ trans('List of :resource', { 'resource':transChoice('common.orders', 2) }) }
				createLabel={ trans('Create :resource', { 'resource':transChoice('common.orders', 1) }) }
				createLink={ route('backoffice.orders.create') }
				collection={ orders }
				settings={ settings }
				filters={ filters }
			/>
		</>
	);
}
