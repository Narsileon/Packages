import { useRef, useEffect } from "react";

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
