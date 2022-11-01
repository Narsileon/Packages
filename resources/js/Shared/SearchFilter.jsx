import { useEffect, useState } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { trans } from "@/narsil-localization";
import { Dropdown, DropdownItem, DropdownPanel } from "@/Components/Elements/Dropdowns";
import pickBy from "lodash/pickBy";
import Icon from "@/Shared/Svg/Icon";

export default function SearchFilter({ filters }) {
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
        <div className="grid grid-cols-1 md: grid-cols-3 border-2 border-color rounded">
            <div className="primary-background flex items-center justify-between px-2">
                <Icon name="search" className="w-6 h-6 m-2" />
                <Dropdown
                    trigger={
                        filter
                    }
                    childrenClasses="right-0"
                    showChevron={ true }
                >
                    <DropdownPanel>
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
                    </DropdownPanel>
                </Dropdown>
            </div>
            <input
                value={ values[filter] ? values[filter] : "" }
                type="text"
                placeholder={ trans("Search for") }
                autoComplete="off"
                onChange={ handleChange }
                className="bg-transparent focus:outline-none p-2"
            />
            <button
                className="primary-background p-2"
                onClick={ reset }
            >
                { trans('Reset') }
            </button>
        </div>
	);
}
