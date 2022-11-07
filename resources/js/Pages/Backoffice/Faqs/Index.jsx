import { Head } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";
import Pagination from "@/Shared/Pagination";

export default function Index({ faqs, filters }) {
	const settings = {
		link: "/backoffice/faqs/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ trans('FAQ') } />

			<Table
				title={ trans('List of :resource', { 'resource': trans('FAQ') }) }
				createLabel={ trans('Create :resource', { 'resource': trans('FAQ') }) }
				createLink={ route('backoffice.faqs.create') }
				data={ faqs.data }
				settings={ settings }
				filters={ filters }
			/>

			<section id="pagination">
				<Pagination data={ faqs } />
			</section>
		</>
	);
}
