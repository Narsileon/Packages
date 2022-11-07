import { useEffect, useState } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { trans } from "@/narsil-localization";
import pickBy from "lodash/pickBy";
import Icon from "@/Shared/Svg/Icon";

export default function SearchField({ filters }) {
    const [values, setValues] = useState(filters);

    const previousValue = usePrevious(values);

    useEffect(() => {
        if (previousValue) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : { remember: 'forget' };
            Inertia.get(route(route().current()), query, {
                replace: true,
                preserveState: true
            });
        }
    }, [values]);

    function handleChange(e) {
        setValues(values => ({
          ...values,
          ['search']: e.target.value
        }));
    }

	return (
        <div className="grid grid-cols-1 md: grid-cols-3 border-2 border-color rounded">
            <div className="primary-background flex items-center justify-between px-2">
                <Icon name="search" className="w-6 h-6 m-2" />
            </div>

            <input
                    value={ values['search'] ? values['search'] : "" }
                    type="text"
                    placeholder={ trans('common.search') }
                    autoComplete="off"
                    onChange={ handleChange }
                    className="bg-transparent focus:outline-none p-2"
                />
        </div>
	);
}
