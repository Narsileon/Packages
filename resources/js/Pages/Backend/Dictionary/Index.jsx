import { useEffect, useState } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useFrontSortableTable } from "@/narsil-react";
import SortButton from "@/Components/Elements/Buttons/SortButton";
import SearchField from "@/Shared/SearchField";
import { upperFirst } from "lodash";

export default function Index({ localizations, filters }) {
    const { locale, dictionary } = usePage().props.localization;

	const [tableData, setTableData, handleSorting] = useFrontSortableTable(localizations.dictionary)

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

			<div className="flex flex-col h-full space-y-4">
				<section id="table-header">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-0 content-start place-content-between">
						<div className="col-span-1 self-center place-self-start w-full">
							<span className="text-xl">
								{ upperFirst(transChoice('common.dictionaries', 1)) }
							</span>
						</div>
						<div className="col-span-1 self-center place-self-end w-full">
							<SearchField filters={ filters } />
						</div>
					</div>
				</section>

				<section id="table" className="min-h-0">
					<div className="min-h-0 h-full border-2 border-color rounded overflow-y-scroll">
						<table>
							<thead className="
								sticky top-0 z-10
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
									Object.entries(tableData).map(([key,value]) => {
										return (
											<tr key={ key }>
												<td>
													{ key }
												</td>
												<td>
													{ trans(`common.${ key }`) }
												</td>
												<td>
													{ value }
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
