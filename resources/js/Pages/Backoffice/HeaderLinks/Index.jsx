import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";

export default function Index({ links, filters }) {
	const settings = {
		link: "/backoffice/header_links/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ trans('FAQ') } />

			{ links ? (
				<Table
					title={ trans('List of :resource', { 'resource': transChoice('common.header_links', 2) }) }
					createLabel={ trans('Create :resource', { 'resource': trans('common.new_header_link') }) }
					createLink={ route('backoffice.header_links.create') }
					data={ links }
					settings={ settings }
					filters={ filters }
				/>
			) : (
				<span>
					{ trans('No :resource was found in the database', { 'resource': transChoice('common.header_links', 1) }) }
				</span>
			)}
		</>
	);
}
