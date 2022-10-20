import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import Chevron from "@/Shared/Svg/Chevron";
import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";
import DropdownItem from "@/Components/Elements/Dropdowns/DropdownItem";
import Icon from "@/Shared/Svg/Icon";


export default function TableBody({ tableData, columns, settings }) {
	const trigger = () => (
		<div className="flex justify-between items-center bg">
			<Icon className="w-6 h-6" name="menu" />
			<Chevron className="w-4 h-4" />
		</div>
	);
	
	function destroy(id) {
		if (confirm('Are you sure you want to delete this contact?')) {
		  	Inertia.delete(settings.link + id);
		}
	}

    return (
        <tbody className="divided-y">
			{ 
				tableData.map((rowData, index) => {
					return (
						<tr 
							className="primary-background odd:bg-gray-100 odd:dark:bg-gray-600 divided-x"
							key={ index }
						>
							<td className="p-2 w-0">
								<Dropdown 
									trigger={ trigger() }
									childrenClasses="left-0"
									width="12"
								>	
									<div>
										{ !settings.editable ? null:
											<DropdownItem
												href={ settings.link + rowData.id + '/edit' } 
												label="Edit"
												type="link"
											/>
										}
									</div>
									<div>
										{ !settings.deletable ? null:
											<DropdownItem 
												label="Delete"
												onClick={ () => destroy(rowData.id) } 
											/>
										}										
									</div>
								</Dropdown>
							</td>

							{ columns.map(({ accessor }) => {
								return (
									<td 
										className="p-2 text-left"
										key={ accessor }
									>
										<Link href={ settings.link + rowData.id }>
											{ rowData[accessor] }
										</Link>
									</td>
								);
							})}
						</tr>
					);
				})
			}
       </tbody>
    );
}