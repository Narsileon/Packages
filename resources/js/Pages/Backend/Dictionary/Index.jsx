import { useRef, useState } from "react";
import { useClickAway, usePrevious, useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useFrontSortableTable } from "@/narsil-react";
import { upperFirst } from "lodash";
import SortButton from "@/Components/Elements/Buttons/SortButton";
import SearchField from "@/Shared/SearchField";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function Index({ localizations, filters }) {
	const [tableData, setTableData, handleSorting] = useFrontSortableTable(localizations.dictionary)

	const [sortField, setSortField] = useState("");
 	const [order, setOrder] = useState("asc");

	const handleSortingChange = (accessor) => {
		const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
		setSortField(accessor);
		setOrder(sortOrder);
		handleSorting(accessor, sortOrder);
	};

	function update() {
		Inertia.patch(`dictionary/${ localizations.user_id }`, { dictionary: tableData});
	};

	return (
		<>
			<Head title={ transChoice('common.dictionaries', 1) } />

			<div className="flex flex-col h-full space-y-4">
			<section id="table-header">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-0 content-start place-content-between">
						<div className="col-span-1 self-center place-self-start">
							<span className="text-xl">
								{ upperFirst(transChoice('common.dictionaries', 1)) }
							</span>
						</div>
						<div className="col-span-1 md:order-2 self-center place-self-end">
							<PrimaryButton
								label={ trans('common.update') }
								onClick={ update }
							/>
						</div>
						<div className="col-span-1 sm:col-span-2 md:col-span-1 md:order-1 place-self-center w-full">
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
									Object.entries(tableData).map(([key, value]) => {
										return (
											<tr key={ key }>
												<td>
													{ key }
												</td>
												<td>
													{ trans(`common.${ key }`) }
												</td>
												<td>
													<CustomValue
														value={ value }
														handleChange={ (event) => setTableData({...tableData, [key]: event.target.value}) }
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

const CustomValue = ({ value, handleChange }) => {
	const [show, setShow] = useToggle(false);

	const field = useRef();

	useClickAway(field, () => setShow(false), ['mousedown', 'submit'])

	return (
		<div
			className="h-full w-full"
			onClick={ setShow }
			ref={ field }
		>
			{
				show ? (
					<textarea
						className="field h-8 w-full p-0 m-0"
						onChange={ (event) => handleChange(event) }
						autoFocus
					/>
				) : (
					<span>
						{ value ? value : "..." }
					</span>
				)
			}
		</div>
	);
}
