import { Head } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";

export default function Index({ footerLinks, filters }) {
	const settings = {
		link: "/backoffice/footer_links/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ t('FAQ') } />

			<Table
				title={ t('List of :resource', { 'resource': p('common.footer_links', 2) }) }
				createLabel={ t('Create :resource', { 'resource': p('common.footer_links', 1) }) }
				createLink={ route('backoffice.footer_links.create') }
				collection={ footerLinks }
				settings={ settings }
				filters={ filters }
			/>
		</>
	);
}
