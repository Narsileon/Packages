import { useRef, useEffect } from "react";
import { useClickAway, useFullscreen, useToggle } from "react-use";

// Horizontal Scroll
export function useHorizontalScroll(
    active = true,
    speed = 2.5
) {
    const ref = useRef(null);

    useEffect(() => {
        if (!active) {
            return;
        }

        const element = ref.current;

        if (element) {
            const onWheel = event => {
                if (event.deltaY == 0) {
                    return;
                }

                event.preventDefault();

                element.scrollTo({
                    left: element.scrollLeft + event.deltaY * speed,
                    behavior: "smooth"
                });
            };

            element.addEventListener("wheel", onWheel);

            return () => element.removeEventListener("wheel", onWheel);
        }
    }, []);

    return ref;
}

// Scroll to...
export const useScrollTo = () => {
    const ref = useRef(null);

    const scrollTo = () => {
        const element = ref.current;

        element.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return [ref, scrollTo];
};

export const useFullscreenable = () => {
    const container = useRef();

    const [fullscreen, setFullScreen] = useToggle(false);

    useFullscreen(container, fullscreen, { onClose: () => setFullScreen(false) });

    return [container, fullscreen, setFullScreen];
}

// Scroll to...
export const useEllipsis = () => {
    const label = useRef(null);

    const [ellipsed, setEllipsed] = useToggle(false);

    useEffect(() => {
        if(label?.current?.offsetWidth < label?.current?.scrollWidth) {
            setEllipsed(true);
        }
    }, [label?.current]);

    return [label];
};

export const useDropdown = (defaultVisibility) => {
    const dropdown = useRef(null);

    const [open, setOpen] = useToggle(defaultVisibility);

    useClickAway(dropdown, () => setOpen(false));

    return [dropdown, open, setOpen];
}
