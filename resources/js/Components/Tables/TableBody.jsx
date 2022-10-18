import Arrow from "@/Shared/Svg/Arrow";
import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";
import DropdownItem from "@/Components/Elements/Dropdowns/DropdownLink";
import Menu from "@/Shared/Svg/Menu";
import { Link } from "@inertiajs/inertia-react";

export default function TableBody({ tableData, columns, settings }) {
	const trigger = () => (
		<div className="flex justify-between items-center bg">
			<Menu className="w-6 h-6" />
			<Arrow className="w-5 h-5" />
		</div>
	);

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
									width="12"
								>
									{ !settings.editable ? null:
										<DropdownItem 
											href={ settings.link + rowData.id + '/edit' } 
											label="Edit"
										/>
									}
									{ !settings.deletable ? null:
										<DropdownItem 
											href={ settings.link + rowData.id }
											label="Delete"
											method="delete" 
											as="button"   
										/>
									}
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