import { Head } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";

export default function Index({ faqs, filters }) {
	const settings = {
		link: "/backoffice/faqs/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ t('FAQ') } />

			<Table
				title={ t('List of :resource', { 'resource': t('FAQ') }) }
				createLabel={ t('Create :resource', { 'resource': t('FAQ') }) }
				createLink={ route('backoffice.faqs.create') }
				collection={ faqs }
				settings={ settings }
				filters={ filters }
			/>
		</>
	);
}
