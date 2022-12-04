import { useRef } from "react";
import { useClickAway, useToggle } from "react-use";
import { offset, size, useFloating } from "@floating-ui/react-dom";
import { upperFirst } from "lodash";
import Chevron from "@/Shared/Svg/Chevron";

export default function Dropdown({
    label,
    trigger,
    children,
    triggerClasses = '',
    childrenClasses = '',
    closeOnClickAway = true,
    closeOnSelect = true,
    defaultVisibility = false,
    placement = 'bottom',
    placementOffset = 2,
    showChevron = true,
}) {
    const dropdown = useRef(null);

    const [open, setOpen] = useToggle(defaultVisibility);

    useClickAway(dropdown, () => {
        if (closeOnClickAway) {
            setOpen(false);
        }
    });

    const { x, y, reference, floating, strategy } = useFloating({
        middleware: [
            offset(placementOffset),
            size({
                apply({ rects, elements }) {
                    Object.assign(elements.floating.style, {
                        width: `${ rects.reference.width }px`
                    });
                }
            }),
        ],
        placement: placement,
    });

    function onChange() {
        if (closeOnSelect) {
            let timer = setTimeout(() => {
                setOpen(false)
            }, 100);

            return () => clearTimeout(timer);
        }
    }

    return (
        <div ref={ dropdown }>
            <button
                className={ `flex items-center justify-between w-full space-x-1 ${ triggerClasses }` }
                onClick={ (event) => {
                    event.preventDefault();
                    setOpen();
                }}
                ref={ reference }
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
                    <div
                        className={ `primary-background border-2 border-color rounded-lg min-w-fit z-10 ${ childrenClasses }` }
                        onClick={ onChange }
                        ref={ floating }
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                        }}
                    >
                        { children }
                    </div>
                ) : null
            }
        </div>
    );
}