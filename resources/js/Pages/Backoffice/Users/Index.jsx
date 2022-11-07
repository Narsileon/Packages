import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Table from "@/Components/Tables/Table";
import Pagination from "@/Shared/Pagination";
import SearchField from "@/Shared/SearchField";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function Index({ users, filters }) {
	const settings = {
		link: "/backoffice/users/",
		editable: true,
		deletable: true,
	};

	return (
		<>
			<Head title={ transChoice('common.users', 2) } />

			<div className="space-y-4">
				<section id="header">
					<div className="grid grid-cols-3">
						<div className="span-col-1">
							<span className="text-xl">
								{ trans('List of :resource', {'resource':transChoice('common.users', 2)}) }
							</span>
						</div>
						<div className="span-col-1">
							<SearchField filters={ filters } />
						</div>
						<div className="span-col-1 place-self-end">
							<PrimaryButton
								href={ route('backoffice.users.create') }
								label={ trans('Create :resource', {'resource': trans('common.new_user')}) }
							/>
						</div>
					</div>
				</section>

				<Table
					title={ trans('List of :resource', {'resource':transChoice('common.users', 2)}) }
					data={ users.data }
					settings={ settings }
				/>

				<Pagination data={ users.meta } />
			</div>
		</>
	);
}
