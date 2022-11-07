import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";

export default function Index({ links, filters }) {
	const settings = {
		link: "/backoffice/footer_links/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ trans('FAQ') } />

			{ links.length ? (
				<Table
					title={ trans('List of :resource', { 'resource': transChoice('common.footer_links', 2) }) }
					createLabel={ trans('Create :resource', { 'resource': trans('common.new_footer_link') }) }
					createLink={ route('backoffice.footer_links.create') }
					data={ links }
					settings={ settings }
					filters={ filters }
				/>
			) : (
				<span>
					{ trans('No :resource was found in the database', { 'resource': trans('common.no_footer_link') }) }
				</span>
			)}
		</>
	);
}
