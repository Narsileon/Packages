import { useState } from "react";
import { useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import { Dropdown, ItemButton, ItemLink } from "@/Components/Elements/Dropdowns";
import ModalWindow from "@/Shared/ModalWindow";
import Icon from "@/Shared/Svg/Icon";

export default function TableMenu({ id, options = {
    showable: true,
    editable: true,
    deletable: true,
}}) {
    const url = usePage().url;

    const [window, setWindow] = useState();
    const [showWindow, setShowWindow] = useToggle(false);

    return (
        <>
            <Dropdown
                trigger={ <Icon name="menu" /> }
                placement="right"
                placementOffset={{ mainAxis: 10 }}
            >
                <ul className="divide-y divide-color space-y-1">
                    {
                        options.showable ? (
                            <ItemLink
                                label={ trans('common.view') }
                                href={ `${ url }/${ id }` }
                            />
                        ) : null
                    }
                    {
                        options.editable ? (
                            <ItemLink
                                href={ `${ url }/${ id }/edit` }
                                label={ trans('common.edit') }
                            />
                        ) : null
                    }
                    {
                        options.deletable ? (
                            <ItemButton
                                label={ trans('common.delete') }
                                onClick={ () => {
                                    setWindow({
                                        message: 'Are you sure you want to delete?',
                                        action: () => Inertia.delete(`${ url }/${ id }`),
                                        label: 'Delete',
                                    });

                                    setShowWindow(true);
                                }}
                            />
                        ) : null
                    }
                </ul>
            </Dropdown>

            {
                showWindow ? (
                    <ModalWindow
                        text={ window.message }
                        action={ window.action }
                        actionLabel={ window.label }
                        setShow={ setShowWindow }
                    />
                ) : null
            }
        </>
    );
}