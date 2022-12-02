import { Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import { Table, TableContainer, TableMenu, TableSettings } from "@/Components/Tables";
import BackendPagination from "@/Components/Pagination/BackendPagination";
import AppHead from "@/Shared/AppHead";
import Icon from "@/Shared/Svg/Icon";

export default function Index({ collection, tableSettings }) {
	const columns = tableSettings.columns.map((column) => {
		if (column.id === 'menu') {
			return {
				...column,
				cell: props => (
					<TableMenu id={ props.row.original.id } />
				),
			};
		};

		return column;
 	});

	const [table] = useTable(collection.data, columns, tableSettings);

	return (
		<>
			<AppHead title={ transChoice('permissions.roles', 2) } />

			<TableContainer
				title={ trans('List of :resource', {'resource': transChoice('permissions.roles', 2)}) }
				table={ table }
				buttons={
					<>
						<Link
							className="primary-button whitespace-nowrap"
							href={ route('admin.roles.create') }
						>
							<Icon name="plus" />
						</Link>

						<TableSettings table={ table } />
					</>
				}
			>
				{ collection.meta.items > 0 ? (
					<>
						<Table
							table={ table }
							horizontalScrolling={ true }
						/>

						<BackendPagination data={ collection.meta } />
					</>
				) : (
					<div>
						{ trans('No :resource was found in the database', { 'resource': transChoice('permissions.roles', 1) }) }
					</div>
				)}
			</TableContainer>
		</>
	);
}
