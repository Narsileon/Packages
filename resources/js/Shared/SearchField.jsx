import { useEffect, useState } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import pickBy from "lodash/pickBy";
import Icon from "./Svg/Icon";

export default function SearchField({ filter }) {
    const [values, setValues] = useState({
        search: filter || '',
    });

    const previousValues = usePrevious(values);

    let href = usePage().url;

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

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
    
        setValues(values => ({
          ...values,
          [key]: value
        }));
    }

	return (
        <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                <Icon name="search" className="w-6 h-6" />
            </div>
            <input 
                value={ values.search } 
                id="search"
                name="search"
                type="text"
                placeholder="Search..." 
                autoComplete="off"
                onChange={ handleChange }
                className="field pl-10" 
            />
        </div>
	);
}
