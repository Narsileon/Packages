import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useSort } from "@/narsil-react";
import SortButton from "@/Components/Elements/Buttons/SortButton";
import SearchField from "@/Shared/SearchField";
import Toggle from "@/Components/Elements/Toggle";

export default function Index({ locales, filters }) {
	const [values, handleChange] = useSort();


	return (
		<>
			<Head title={ transChoice('common.languages', 2) } />

			<section>
				<div>
					<SearchField filters={ filters } />
				</div>
				<div className="border-2 border-color rounded">
					<table>
					<thead className="
						bg-gray-400
						dark:bg-gray-800
					">
							<tr>
								{
									locales[0] != null && Object.keys(locales[0]).map((key) => {
										return (
											<th key={ key }>
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
								locales.map((data) => {
									return (
										<tr key={ data['id']}>
											<td>
												{ data['id'] }
											</td>
											<td>
												{ data['locale'] }
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
			</section>
		</>
	);
}
