import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import Toggle from "@/Components/Elements/Toggle";
import Table from "@/Components/Tables/Table";
import TableHeader from "@/Components/Tables/TableHeader";

export default function Index({ languages, header, template }) {
	let newHeader = [...header].map(object => {
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

	const [table, data, setData, globalFilter, setGlobalFilter] = useTable(languages.data, newHeader, template, true);

	function handleChange(event, id) {
		let temp = [...data];

		let result = temp.find(x => x.id == id);
		result.active = !result.active;

		setData(temp);
	};

	function update() {
		Inertia.patch(route('admin.languages'), data);
	};

	return (
		<>
			<Head title={ transChoice('common.languages', 2) } />

			<div className="flex flex-col h-full space-y-4">
				<TableHeader
					title={ trans('List of :resource', { 'resource': transChoice('locales.languages', 2) }) }
					filter={ globalFilter }
					setFilter={ setGlobalFilter }
				>
					<PrimaryButton
						label={ trans('common.update') }
						onClick={ update }
					/>
				</TableHeader>

				<Table table={ table } />
			</div>
		</>
	);
}
