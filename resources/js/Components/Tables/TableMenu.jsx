import { usePage } from "@inertiajs/inertia-react";
import { Dropdown, DropdownItem, DropdownPanel} from "@/Components/Elements/Dropdowns";
import Icon from "@/Shared/Svg/Icon";

export default function TableMenu({ id, options = {
    editable: true,
    deletable: true,
}}) {
    const url = usePage().url;

    return (
        <Dropdown
            trigger={ <Icon name="menu" className="w-6 h-6" /> }
            childrenClasses="left-0"
            showChevron ={ true }
            width="12"
        >
            <DropdownPanel>
                {
                    options.editable && (
                        <DropdownItem
                            href={ `${ url }/${ id }/edit` }
                            label="Edit"
                            type="link"
                        />
                    )
                }
                {
                    options.deletable && (
                        <DropdownItem
                            label="Delete"
                        />
                    )
                }
            </DropdownPanel>
        </Dropdown>
    );
}