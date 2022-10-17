import { useRef, useState } from "react"
import { useClickAway } from "react-use";

export default function Dropdown({
    trigger, 
    children,
    width="36",
    height="72",
}) {
    let [active, setActive] = useState(false)

    const dropdown = useRef(null);

    useClickAway(dropdown, () => {
        setActive(false);
    });
    
    return (
        <div ref={ dropdown }>
            <div 
                className={
                    "min-w-fit border-gray-500 rounded" 
                    + " w-" + width
                }
                onClick={ () => setActive(active = !active) }
            >
                { trigger }
            </div>
            {
                active ? 
                (
                    <div className={
                        "primary-background absolute overflow-auto min-w-fit mt-2 py-1 z-40 border border-gray-500 rounded"
                        + " w-" + width
                        + " max-h-" + height
                    }>
                        <ul className="divided-y">
                            { children }
                        </ul>
                    </div>
                ) : null
            }
        </div>
    );
}
