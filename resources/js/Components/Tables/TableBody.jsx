import { Link } from "@inertiajs/inertia-react";
import { Dropdown, DropdownItem, DropdownPanel } from "@/Components/Elements/Dropdowns";
import Icon from "@/Shared/Svg/Icon";

export default function TableBody({ data, settings, openModal }) {
    return (
		<tbody>
		{
			data.map((rowData, index) => {
				return (
					<tr key={ index }>
						<td className="p-2 w-16">
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

						{ Object.keys(data[0]).map((key) => {
							return (
								<td
									className="min-w-lg max-w-lg"
									key={ key }
								>
									<Link href={ settings.link + rowData.id } className="truncate">
										{ rowData[key] }
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