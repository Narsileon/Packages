import { useRef } from "react";
import { useClickAway } from "react-use";

export default function Window({
    setVisible,
    height = 'h-96',
    width = 'w-96',
    children
}) {
    const window = useRef(null);

    useClickAway(window, () => {
        setVisible(false);
    });

    return (
        <div
            className={ `fixed inset-x-0 inset-y-0 mx-auto my-auto overflow-y-auto z-50 ${ width } ${ height }` }
            ref={ window }
        >
            { children }
        </div>
    );
}
