import { useRef, useEffect, useState } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { pickBy } from "lodash";

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

export const useSort = () => {
    const [values, setValues] = useState({
        field: '',
        sort: 'asc',
    });

    const previousValues = usePrevious(values);

    let href = usePage().url;

    const handleChange = (accessor) => {
        setValues(values => ({
            ...values,
            ['field']: accessor,
            ['sort']: accessor === values.field && values.sort === "asc" ? "desc" : "asc",
        }));
    };

    useEffect(() => {
        if (previousValues) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : { remember: 'forget' };
            Inertia.get(href, query, {
                replace: true,
                preserveState: true
            });
        }
    }, [values]);

    return [values, handleChange];
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
