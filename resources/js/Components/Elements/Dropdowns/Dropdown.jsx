import { useRef } from "react"
import { useClickAway, useToggle } from "react-use";

export default function Dropdown({
    className="",
    trigger, 
    children
}) {
    const dropdown = useRef(null);

    let [open, setOpen] = useToggle(false)

    useClickAway(dropdown, () => setOpen(false));
    
    return (
        <div ref={ dropdown }>
            <button 
                className={ "border-gray-500 rounded" }
                onClick={ setOpen }
            >
                { trigger }
            </button>
            { !open ? null :
                <div className={ `primary-background absolute overflow-auto min-w-fit mt-2 py-1 z-40 border border-gray-500 rounded ${ className }` }>
                    <ul className="divided-y">
                        { children }
                    </ul>
                </div>
            }
        </div>
    );
}
