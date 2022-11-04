import { upperFirst } from "lodash";
import Sort from "@/Shared/Svg/Sort";

export default function SortButton({
    label,
    accessor,
    field,
    order,
    ...props
}) {
    return (
        <button
            className="flex items-center m-2"
            { ...props }
        >
            <span className="p-2">
                { upperFirst(label) }
            </span>

            <Sort
                className="w-4 h-4"
                order={ field === accessor ? order : 'none' }
            />
        </button>
    );
}
