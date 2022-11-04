import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useSort } from "@/narsil-react";
import SortButton from "@/Components/Elements/Buttons/SortButton";

export default function Index({ locales, filters }) {
	const [values, handleChange] = useSort();

	return (
		<>
			<Head title={ transChoice('common.languages', 2) } />

			<table>
				<thead>
					<tr>
						{
							locales[0] != null && Object.keys(locales[0]).map((key) => {
								return (
									<th
										className="text-left min-w-sm max-w-lg"
										key={ key }
									>
										<SortButton
											label={ trans(`validation.attributes.${ key }`) }
											accessor={ key }
											field={ values.field }
											order={ values.sort }
											onClick={ () => handleChange(key) }
										/>
									</th>
								);
							})
						}
					</tr>
				</thead>
				<tbody>
					{
						locales.map((rowData, index) => {
							return (
								<tr
									className="table-row divide-x divide-color"
									key={ index }
								>
									{ Object.keys(locales[0]).map((key) => {
										return (
											<td
												className="p-2 min-w-lg max-w-lg text-left truncate"
												key={ key }
											>
												{ rowData[key] }
											</td>
										);
									})}
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</>
	);
}
