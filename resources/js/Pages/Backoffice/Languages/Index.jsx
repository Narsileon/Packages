import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useFrontSortableTable, useSort } from "@/narsil-react";
import SortButton from "@/Components/Elements/Buttons/SortButton";
import SearchField from "@/Shared/SearchField";
import Toggle from "@/Components/Elements/Toggle";
import { upperFirst } from "lodash";
import { useState } from "react";

export default function Index({ locales, filters }) {
	const [tableData, handleSorting] = useFrontSortableTable(locales)

	const [sortField, setSortField] = useState("");
 	const [order, setOrder] = useState("asc");

	 const handleSortingChange = (accessor) => {
		const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
		setSortField(accessor);
		setOrder(sortOrder);
		handleSorting(accessor, sortOrder);
	};

	return (
		<>
			<Head title={ transChoice('common.languages', 2) } />

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
										label={ trans('common.code') }
										accessor={ 'locale' }
										onClick={ () => handleSortingChange('locale') }
									/>
								</th>
								<th>
									<SortButton
										label={ upperFirst(transChoice('locales.languages', 1)) }
										accessor={ 'locale' }
										onClick={ () => handleSortingChange('locale') }
									/>
								</th>
								<th>
									<SortButton
										label={ upperFirst(trans('common.active')) }
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
										<tr key={ data['id']}>
											<td>
												{ data['id'] }
											</td>
											<td>
												{ data['locale'] }
											</td>
											<td>
												{ trans(`locales.${ data['locale'] }`) }
											</td>
											<td>
												<Toggle value={ data['active'] } />
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
