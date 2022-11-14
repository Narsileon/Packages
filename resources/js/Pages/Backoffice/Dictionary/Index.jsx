import { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useFrontSortableTable } from "@/narsil-react";
import { transform, upperFirst } from "lodash";
import SortButton from "@/Components/Elements/Buttons/SortButton";
import SearchField from "@/Shared/SearchField";
import Toggle from "@/Components/Elements/Toggle";
import { usePrevious } from "react-use";


export default function Index({ localizations, filters }) {
    const { locale } = usePage().props.localization;

	const [tableData, setTableData, handleSorting] = useFrontSortableTable(localizations)

	const previous = usePrevious(tableData);

	const [sortField, setSortField] = useState("");
 	const [order, setOrder] = useState("asc");

	function handleChange(event, id) {
		let data = [...tableData];

		let result = data.find(x => x.id == id);
		result.active = !result.active;

		setTableData(data);
	}

	const handleSortingChange = (accessor) => {
		const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
		setSortField(accessor);
		setOrder(sortOrder);
		handleSorting(accessor, sortOrder);
	};

	useEffect(() => {
		if (previous) {
			Inertia.patch(route('backoffice.languages'), tableData);
		}
    }, [tableData]);

	return (
		<>
			<Head title={ transChoice('common.dictionaries', 1) } />

			<div className="space-y-4">
				<section id="table-header">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-0 content-start place-content-between">
						<div className="col-span-1 self-center place-self-start w-full">
							<span className="text-xl">
								{ trans('List of :resource', { 'resource': transChoice('locales.languages', 2) }) }
							</span>
						</div>
						<div className="col-span-1 self-center place-self-end w-full">
							<SearchField filters={ filters } />
						</div>
					</div>
				</section>

				<div className="border-2 border-color rounded">
					<table>
						<thead className="
							bg-gray-400
							dark:bg-gray-800
						">
							<tr>
								<th>
									<SortButton
										label={ trans('common.id') }
										accessor={ 'id' }
										onClick={ () => handleSortingChange('id') }
									/>
								</th>
								<th>
									<SortButton
										label={ transChoice('common.keys', 1) }
										accessor={ 'locale' }
										onClick={ () => handleSortingChange('locale') }
									/>
								</th>
								<th>
									<SortButton
										label={ trans(`locales.${ locale }`) }
										accessor={ 'locale' }
										onClick={ () => handleSortingChange('locale') }
									/>
								</th>
								<th>
									<SortButton
										label={ transChoice('common.custom_values', 1) }
										accessor={ 'active' }
										onClick={ () => handleSortingChange('active') }
									/>
								</th>
							</tr>
						</thead>
						<tbody>
							{
								tableData.map((data) => {
									return (
										<tr key={ data.id }>
											<td>
												{ data.id }
											</td>
											<td>
												{ data.key }
											</td>
											<td>
												{ trans(`common.${ data.key }`) }
											</td>
											<td>
												<Toggle
													value={ data.value }
													onChange={ (event) => handleChange(event, data.id) }
												/>
											</td>
										</tr>
									);
								})
							}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
