import { Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/Components/Tables/pia-table";
import { Table, TableContainer, TableMenu } from "@/Components/Tables";
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
			<AppHead title={ trans('FAQ') } />

			<TableContainer
				title={ trans('List of :resource', { 'resource': transChoice('common.faqs', 1) }) }
				table={ table }
				buttons={
					<>
						<Link
							className="primary-button whitespace-nowrap"
							href={ route('admin.faqs.create') }
						>
							<Icon name="plus" />
						</Link>
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
						{ trans('No :resource was found in the database', { 'resource': transChoice('common.faqs', 1) }) }
					</div>
				)}
			</TableContainer>
		</>
	);
}
