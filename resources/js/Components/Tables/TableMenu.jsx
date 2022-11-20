import { useState } from "react";
import { useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import { Dropdown, DropdownItem, DropdownPanel} from "@/Components/Elements/Dropdowns";
import ModalWindow from "@/Shared/ModalWindow";
import Icon from "@/Shared/Svg/Icon";

export default function TableMenu({ id, options = {
    showable: true,
    editable: true,
    deletable: true,
}}) {
    const url = usePage().url;

    const [show, setShow] = useToggle(false);
    const [window, setWindow] = useState();

    return (
        <>
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
                                onClick={ () => {
                                    setWindow({
                                        message: 'Are you sure you want to delete?',
                                        action: () => Inertia.delete(`${ url }/${ id }`),
                                        label: 'Delete',
                                    });

                                    setShow(true);
                                }}
                            />
                        )
                    }
                </DropdownPanel>
            </Dropdown>

            {
                show && (
                    <ModalWindow
                        text={ window.message }
                        action={ window.action }
                        actionLabel={ window.label }
                        setShow={ setShow }
                    />
                )
            }
        </>
    );
}