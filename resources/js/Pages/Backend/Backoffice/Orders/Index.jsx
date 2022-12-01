import { Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import { Table, TableContainer, TableMenu, TableSettings } from "@/Components/Tables";
import BackendPagination from "@/Components/Pagination/BackendPagination";
import AppHead from "@/Shared/AppHead";
import Icon from "@/Shared/Svg/Icon";

export default function Index({ orders, columns, template, list }) {
	let newHeader = [...columns];

	newHeader.push({
		id: 'menu',
		header: '',
		cell: props => (
			<TableMenu id={ props.row.original.id } />
		),
		maxSize: 50,
		disableOrderBy: true,
		disableSortBy: true,
	})

	const [table] = useTable(orders.data, newHeader, template);

	return (
		<>
			<AppHead title={ transChoice('common.orders', 2) } />

			<TableContainer
				title={ trans('List of :resource', { 'resource': transChoice('common.orders', 2) }) }
				table={ table }
				buttons={
					<>
						<Link
							className="primary-button"
							href={ route('admin.orders.create') }
						>
							<Icon name="plus" />
						</Link>

						<TableSettings table={ table } />
					</>
				}
			>
				{ orders.meta.items > 0 ? (
					<>
						<Table
							table={ table }
							horizontalScrolling={ true }
						/>

						<BackendPagination data={ orders.meta } />
					</>
				) : (
					<div>
						{ trans('No :resource was found in the database', { 'resource': transChoice('common.orders', 1) }) }
					</div>
				)}
			</TableContainer>
		</>
	);
}
