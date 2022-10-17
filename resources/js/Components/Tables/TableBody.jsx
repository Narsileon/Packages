import Arrow from "@/Shared/Svg/Arrow";
import Dropdown from "../Elements/Dropdown";
import DropdownItem from "../Elements/DropdownItem";
import { Menu } from "@/Shared/Svg/Icons";

export default function TableBody({ tableData, columns, settings }) {
	const trigger = () => (
		<div className="flex justify-between items-center space-x-1 bg">
			<Menu />
			<Arrow />
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
											href={settings.link + rowData.id + '/edit'} 
											label="Edit"
										/>
									}
									{ !settings.deletable ? null:
										<DropdownItem 
											href={settings.link + rowData.id}
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
										{ rowData[accessor] }
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