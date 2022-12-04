import { trans } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Dropdown } from "@/Components/Elements/Dropdowns";

export default function TableFilterDropdown({ label, options, setOption }) {
    return (
        <Dropdown
            label={ trans(`common.${ label }`) }
        >
            <ul className="divide-y divide-color m-1 p-1 space-y-1">
                {
                    options.map((option, index) => {
                        return (
                            <li key={ index }>
                                <button
                                    className="w-full text-left"
                                    onClick={ () => { setOption(option) } }
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