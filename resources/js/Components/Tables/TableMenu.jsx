import { usePage } from "@inertiajs/inertia-react";
import { Dropdown, DropdownItem, DropdownPanel} from "@/Components/Elements/Dropdowns";
import Icon from "@/Shared/Svg/Icon";
import { trans } from "@/narsil-localization";

export default function TableMenu({ id, options = {
    showable: true,
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
                    options.showable && (
                        <DropdownItem
                            href={ `${ url }/${ id }` }
                            label={ trans('common.view') }
                            type="link"
                        />
                    )
                }
                {
                    options.editable && (
                        <DropdownItem
                            href={ `${ url }/${ id }/edit` }
                            label={ trans('common.edit') }
                            type="link"
                        />
                    )
                }
                {
                    options.deletable && (
                        <DropdownItem
                            label={ trans('common.delete') }
                        />
                    )
                }
            </DropdownPanel>
        </Dropdown>
    );
}