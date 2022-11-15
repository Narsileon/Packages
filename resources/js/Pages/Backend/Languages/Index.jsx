import { useEffect, useState } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useFrontSortableTable } from "@/narsil-react";
import SortButton from "@/Components/Elements/Buttons/SortButton";
import Toggle from "@/Components/Elements/Toggle";
import SearchField from "@/Shared/SearchField";

export default function Index({ languages, filters }) {
	const [tableData, setTableData, handleSorting] = useFrontSortableTable(languages)

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
			Inertia.patch(route('admin.languages'), tableData);
		}
    }, [tableData]);

	return (
		<>
			<Head title={ transChoice('common.languages', 2) } />

			<div className="flex flex-col h-full space-y-4">
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

				<section id="table" className="min-h-0">
					<div className="h-full border-2 border-color overflow-y-auto rounded overflow-y-scroll">
						<table>
							<thead className="
								sticky top-0 z-10
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
											label={ transChoice('locales.languages', 1) }
											accessor={ 'locale' }
											onClick={ () => handleSortingChange('locale') }
										/>
									</th>
									<th>
										<SortButton
											label={ trans('common.active') }
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
													{ data.locale }
												</td>
												<td>
													{ trans(`locales.${ data.locale }`) }
												</td>
												<td>
													<Toggle
														value={ data['active'] }
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
				</section>
			</div>
		</>
	);
}
