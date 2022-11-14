import { useEffect, useState } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useFrontSortableTable } from "@/narsil-react";
import SortButton from "@/Components/Elements/Buttons/SortButton";
import SearchField from "@/Shared/SearchField";

export default function Index({ localizations, filters }) {
    const { locale, dictionary } = usePage().props.localization;

	const [tableData, setTableData, handleSorting] = useFrontSortableTable(dictionary.common)

	const previous = usePrevious(tableData);

	const [sortField, setSortField] = useState("");
 	const [order, setOrder] = useState("asc");

	function handleChange(event, key) {
		let data = [...tableData];

		let result = data.find(x => x.key == key);
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
			<Head title={ transChoice('common.dictionaries', 1) } />

			<div className="space-y-4">
				<section id="table-header">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-0 content-start place-content-between">
						<div className="col-span-1 self-center place-self-start w-full">
							<span className="text-xl">
								{ transChoice('common.dictionaries', 1) }
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
										label={ transChoice('common.keys', 1) }
										accessor={ 'locale' }
										onClick={ () => handleSortingChange('locale') }
									/>
								</th>
								<th>
									<SortButton
										label={ transChoice('common.values', 1) }
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
										<tr key={ data.key }>
											<td>
												{ data.key }
											</td>
											<td>
												{ trans(`common.${ data.key }`) }
											</td>
											<td>
												{ data.value }
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
