import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import Toggle from "@/Components/Elements/Toggle";
import Table from "@/Components/Tables/Table";
import TableHeader from "@/Components/Tables/TableHeader";
import FrontendPagination from "@/Components/Pagination/FrontendPagination";

export default function Index({ languages, columns, template }) {
	let newHeader = [...columns].map(object => {
		if (object.id === 'active') {
		  	return {
				...object,
				cell: props => (
					<Toggle
						value={ props.getValue() }
						onChange={ (event) => handleChange(event, props.row._valuesCache.id) }
					/>
				)
			}
		} else {
			return object;
		}
	});

	const [table] = useTable(languages.data, newHeader, template, false);

	function handleChange(event, id) {
		let temp = [...table.options.data];

		let result = temp.find(x => x.id == id);
		result.active = !result.active;

		table.options.meta.setData(temp);
	};

	function update() {
		Inertia.patch(route('admin.languages'), table.options.data);
	};

	return (
		<>
			<Head title={ transChoice('common.languages', 2) } />

			<div className="flex flex-col h-full space-y-4">
				<TableHeader
					title={ trans('List of :resource', { 'resource': transChoice('locales.languages', 2) }) }
					table={ table }
				>
					<PrimaryButton
						label={ trans('common.update') }
						onClick={ update }
					/>
				</TableHeader>

				<Table table={ table } />

				<FrontendPagination table={ table } />
			</div>
		</>
	);
}
