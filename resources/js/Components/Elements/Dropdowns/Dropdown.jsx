import { useRef } from "react"
import { useClickAway, useToggle } from "react-use";
import Chevron from "@/Shared/Svg/Chevron";

export default function Dropdown({
    trigger,
    triggerClasses = "",
    visibility = false,
    closeOnClickAway = false,
    children
}) {
    const dropdown = useRef(null);

    const [open, setOpen] = useToggle(visibility);

    useClickAway(dropdown, () => setOpen(false));

    return (
        <div ref={ dropdown }>
            {/* Trigger */}
            <button
                className={ `selectable w-full ${ triggerClasses } ${ open ? "selectable-active" : "" }` }
                onClick={ (event) => {
                    event.preventDefault();
                    setOpen();
                }}
            >
                <div className="flex items-center justify-between w-full space-x-1">
                    <div>
                        { trigger }
                    </div>

                    <Chevron direction={ open ? "up" : "down" } className="w-4 h-4" />
                </div>
            </button>

            { open ? children : null }
        </div>
    );
}
