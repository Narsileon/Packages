import { Head } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";

export default function Index({ footerLinks, filters }) {
	const settings = {
		link: "/backoffice/footer_links/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ trans('FAQ') } />

			<Table
				title={ trans('List of :resource', { 'resource':transChoice('common.footer_links', 2) }) }
				createLabel={ trans('Create :resource', { 'resource':transChoice('common.footer_links', 1) }) }
				createLink={ route('backoffice.footer_links.create') }
				collection={ footerLinks }
				settings={ settings }
				filters={ filters }
			/>
		</>
	);
}
