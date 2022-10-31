import { useRef, useEffect } from "react";

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

// Horizontal Scroll
export function useHorizontalScroll() {
    const ref = useRef(null);
    const speed = 2.5;

    useEffect(() => {
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
