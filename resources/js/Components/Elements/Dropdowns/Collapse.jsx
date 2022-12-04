import { useRef } from "react";
import { useToggle } from "react-use";
import { upperFirst } from "lodash";
import Chevron from "@/Shared/Svg/Chevron";

export default function Dropdown({
    label,
    trigger,
    children,
    triggerClasses = '',
    childrenClasses = '',
    defaultVisibility = false,
    showChevron = true,
    ...props
}) {
    const collapse = useRef(null);

    const [open, setOpen] = useToggle(defaultVisibility);

    return (
        <div
            ref={ collapse }
            { ...props }
        >
            <button
                className={ `flex items-center justify-between w-full space-x-1 ${ triggerClasses }` }
                onClick={ (event) => {
                    event.preventDefault();
                    setOpen();
                }}
            >
                {
                    label ? (
                        <span>
                            { upperFirst(label) }
                        </span>
                    ) : null
                }
                {
                    trigger ? trigger : null
                }
                {
                    showChevron ? (
                        <Chevron
                            className="w-4 h-4"
                            direction={ open ? 'up' : 'down' }
                        />
                    ) : null
                }
            </button>
            {
                open ? (
                    <>
                        <hr className="border-color" />

                        <div className={ `primary-background min-w-fit z-10 ${ childrenClasses }` }>
                            { children }
                        </div>
                    </>
                ) : null
            }
        </div>
    );
}