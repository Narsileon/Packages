import { useState } from "react";
import { useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { useDropdown } from "@/narsil-react";
import { offset, useFloating } from "@floating-ui/react-dom";
import { trans } from "@/narsil-localization";
import { Dropdown, DropdownItem, DropdownPanel} from "@/Components/Elements/Dropdowns";
import ModalWindow from "@/Shared/ModalWindow";
import Icon from "@/Shared/Svg/Icon";
import Chevron from "@/Shared/Svg/Chevron";

export default function TableMenu({ id, options = {
    showable: true,
    editable: true,
    deletable: true,
}}) {
    const url = usePage().url;

    const [window, setWindow] = useState();
    const [showWindow, setShowWindow] = useToggle(false);

    const [dropdown, show, setShow] = useDropdown(false, true);

    const { x, y, reference, floating, strategy } = useFloating({
        placement: 'right',
        middleware: [offset({mainAxis: 10})],
    });

    return (
        <>
            <div ref={ reference }>
                <div
                    className="w-12 z-10"
                    ref={ dropdown }
                >
                    <div className="flex items-center">
                        <button
                            className="flex items-center"
                            onClick={ setShow }
                        >
                            <Icon name="menu" />
                            <Chevron className="w-4 h-4" direction={ show ? 'down' : 'left' } />
                        </button>
                    </div>
                    {
                        show ? (
                            <div
                                className="primary-background border-2 border-color min-w-fit z-10"
                                ref={ floating }
                                style={{
                                    position: strategy,
                                    top: y ?? '0',
                                    left: x ?? '0',
                                }}
                            >
                                <ul className="divide-y divide-color space-y-1">
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
                                </ul>
                            </div>
                        ) : null
                    }
                </div>
            </div>

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