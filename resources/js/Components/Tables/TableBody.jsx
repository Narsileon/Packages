import { Link } from "@inertiajs/inertia-react";
import { Dropdown, DropdownItem, DropdownPanel } from "@/Components/Elements/Dropdowns";
import Icon from "@/Shared/Svg/Icon";

export default function TableBody({ tableData, columns, settings, openModal }) {
    return (
		<>
			<tbody className="divide-y divide-color">
			{ 
				tableData.map((rowData, index) => {
					return (
						<tr 
							className="table-row divide-x divide-color"
							key={ index }
						>
							<td className="p-2 w-0">
								<Dropdown 
									trigger={ <Icon name="menu" className="w-6 h-6" /> }
									childrenClasses="left-0"
									showChevron ={ true }
									width="12"
								>	
									<DropdownPanel>
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
												onClick={ () => openModal(rowData.id) }
											/>
										}
										</div>										
									</DropdownPanel>
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
		</>
    );
}