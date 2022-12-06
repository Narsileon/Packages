import { Inertia } from "@inertiajs/inertia";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import { Table, TableContainer } from "@/Components/Tables";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import Toggle from "@/Components/Elements/Toggle";
import FrontendPagination from "@/Components/Pagination/FrontendPagination";
import AppHead from "@/Shared/AppHead";

export default function Index({ collection, tableSettings }) {
	const columns = tableSettings.columns.map((column) => {
		if (column.id === 'active') {
			return {
				...column,
				cell: props => (
					<Toggle
						value={ props.getValue() }
						onChange={ () => handleChange(props.row._valuesCache.id) }
					/>
				)
			};
		};

		return column;
 	});

	const [table] = useTable(collection.data, columns, tableSettings, false);

	function handleChange(id) {
		let temp = [...table.options.data];

		let result = temp.find(x => x.id == id);
		result.active = !result.active;

		table.options.meta.setData(temp);
	};

	return (
		<>
			<AppHead title={ transChoice('common.languages', 2) } />

			<TableContainer
				title={ trans('List of :resource', { 'resource': transChoice('locales.languages', 2) }) }
				table={ table }
				buttons={
					<PrimaryButton
						label={ trans('common.update') }
						onClick={ () => Inertia.patch(route('admin.languages.update'), table.options.data) }
					/>
				}
			>
				<Table table={ table } />

				<FrontendPagination table={ table } />
			</TableContainer>
		</>
	);
}
