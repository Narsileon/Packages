import { useState } from "react";
import { trans } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Dropdown } from "../Elements/Dropdowns";

export default function TableFilterDropdown({ value, onChanged, options }) {
    const[current, setCurrent] = useState(options[0]);

    return (
        <Dropdown
            label={ trans(`common.${ current.label }`) }
        >
            <ul className="divide-y divide-color m-1 p-1 space-y-1">
                {
                    options.map((option, index) => {
                        return (
                            <li key={ index }>
                                <button
                                    className="w-full text-left"
                                    onClick={ () => { onChanged(option) } }
                                >
                                    { upperFirst(trans(`common.${ option.label }`)) }
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        </Dropdown>
    );
}