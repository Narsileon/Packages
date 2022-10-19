import { useRef } from "react"
import { useClickAway, useToggle } from "react-use";

export default function Dropdown({
    triggerClasses="",
    childrenClasses="",
    trigger, 
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
            <button 
                className={ `selectable ${ triggerClasses } ${ open ? "selectable-active" : "" }` }
                onClick={ setOpen }
            >
                { trigger }
            </button>
            { !open ? null :
                <div className={ `primary-background absolute overflow-auto min-w-fit mt-2 z-40 bordered rounded ${ childrenClasses }` }>
                    <ul className="divided-y space-y-1">
                        { children }
                    </ul>
                </div>
            }
        </div>
    );
}
