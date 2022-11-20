import { useEffect } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import { Dropdown, DropdownItem, DropdownPanel} from "@/Components/Elements/Dropdowns";
import NewTable from "@/Components/Tables/NewTable";
import TableSearch from "@/Components/Tables/TableSearch";
import Pagination from "@/Shared/Pagination";
import Icon from "@/Shared/Svg/Icon";

export default function Index({ orders, header, template }) {
	let newHeader = [...header];

	newHeader.push({
		id: 'menu',
		header: '',
		cell: props => (
			<Dropdown
				trigger={ <Icon name="menu" className="w-6 h-6" /> }
				childrenClasses="left-0"
				showChevron ={ true }
				width="12"
			>
				<DropdownPanel>
					<div>
						<DropdownItem
							href={ 'footer_links/' + props.row._valuesCache.id + '/edit' }
							label="Edit"
							type="link"
						/>
					</div>
					<div>
						<DropdownItem
							label="Delete"
						/>
					</div>
				</DropdownPanel>
			</Dropdown>
		)
	})

	const [table, data, setData, globalFilter, setGlobalFilter, newTemplate, sorting] = useTable(orders.data, newHeader, template);

	const previous = usePrevious(sorting);

    useEffect(() => {
		if (previous) {
			const timeout = setTimeout(() => {
				Inertia.get(route('admin.templates'), {
					'template': newTemplate,
					'route': 'admin.orders.index',
				});
			}, 0);

			return () => clearTimeout(timeout)
		}
	}, [sorting]);

	return (
		<>
			<Head title={ transChoice('common.orders', 2) } />

			<div className="flex flex-col h-full space-y-4">
				<section id="table-header">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-0 content-start place-content-between">
						<div className="col-span-1 self-center place-self-start">
							<span className="text-xl">
								{ trans('List of :resource', { 'resource': transChoice('common.orders', 2) }) }
							</span>
						</div>
						<div className="col-span-1 md:order-2 self-center place-self-end">
							<Link
								className="primary-button whitespace-nowrap"
								href={ route('admin.orders.create') }
							>
								{ trans('Create :resource', { 'resource': trans('common.new_order') }) }
							</Link>
						</div>

						<div className="col-span-1 sm:col-span-2 md:col-span-1 md:order-1 place-self-center w-full">
							<TableSearch
								value={ globalFilter ?? '' }
								onChange={ value => setGlobalFilter(value) }
							/>
						</div>
					</div>
				</section>

				{ orders.meta.items > 0 ? (
					<>
						<NewTable table={ table } />

						<Pagination data={ orders.meta } />
					</>
				) : (
					<div>
						{ trans('No :resource was found in the database', { 'resource': transChoice('common.orders', 1) }) }
					</div>
				)}
			</div>
		</>
	);
}
