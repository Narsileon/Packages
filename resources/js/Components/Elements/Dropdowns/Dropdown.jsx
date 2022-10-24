import { useRef } from "react"
import { useClickAway, useToggle } from "react-use";
import Chevron from "@/Shared/Svg/Chevron";

export default function Dropdown({
    triggerClasses="",
    trigger,
    showChevron=false, 
    children
}) {
    const dropdown = useRef(null);

    const [open, setOpen] = useToggle(false);

    useClickAway(dropdown, () => setOpen(false));
    
    return (
        <div 
            className="relative"
            ref={ dropdown }
        >
            {/* Trigger */}
            <button 
                className={ `selectable w-full ${ triggerClasses } ${ open ? "selectable-active" : "" }` }
                onClick={ setOpen }
            >
                <div className="flex items-center justify-between w-full">
                    { trigger }
                    
                    { showChevron && ( <Chevron direction={ open ? "up" : "down" } className="w-4 h-4" /> ) }
                </div>
            </button>

            {/* Content */}
            { open && (
                <>
                    { children }
                </>
            )}
        </div>
    );
}
