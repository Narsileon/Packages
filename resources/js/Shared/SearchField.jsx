import { useEffect, useState } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { t } from "@/narsil-localization";
import pickBy from "lodash/pickBy";
import Icon from "@/Shared/Svg/Icon";
import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";
import DropdownItem from "@/Components/Elements/Dropdowns/DropdownItem";
import Chevron from "./Svg/Chevron";

export default function SearchField({ filters }) {
    const [values, setValues] = useState(filters);
    const [filter, setFilter] = useState(Object.keys(filters)[0])

    const previousValues = usePrevious(values);

    useEffect(() => {
        if (previousValues) {
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
        const key = filter;
        const value = e.target.value;
    
        setValues(values => ({
          ...values,
          [key]: value
        }));
    }

    function reset() {
        Object.keys(filters).map((key) => {
            setValues(values => ({
                ...values,
                [key]: ""
              }));
        })
    }

	return (
        <div className="relative flex items-center bordered rounded">
            <div className="primary-background flex items-center justify-between">
                <Icon name="search" className="w-6 h-6 m-2" />
                <Dropdown 
                    trigger={
                        <div className="flex items-center justify-between p-2 space-x-2">
                            <span>
                                { filter }
                            </span>
                            <Chevron direction="down" className="w-4 h-4" />
                        </div>
                    }
                    childrenClasses="right-0" 
                >
                    <div>
                        {
                            Object.keys(filters).map((key) => {
                                return (
                                    <DropdownItem 
                                        label={ key }
                                        onClick={ () => {
                                            setFilter(key);
                                            handleChange;
                                        }}
                                        key={ key }
                                    />
                                );
                            })
                        }
                    </div>
                </Dropdown>
            </div>
            <input 
                value={ values[filter] ? values[filter] : "" } 
                type="text"
                placeholder={ t("Search for") }
                autoComplete="off"
                onChange={ handleChange }
                className="bg-transparent focus:outline-none p-2" 
            />
            <button
                className="primary-background p-2"
                onClick={ reset }
            >
                Reset
            </button>
        </div>
	);
}
