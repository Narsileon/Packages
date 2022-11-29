import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { useDropdown } from "@/narsil-react";
import AddButton from "@/Components/Elements/Buttons/AddButton";
import Chevron from "@/Shared/Svg/Chevron";

export default function SortableItems({
    label,
    items,
    onClick,
    defaultVisibility = false
}) {
    const[dropdown, open, setOpen] = useDropdown(defaultVisibility, false);

    return (
        <div className="primary-background rounded">
            <div
                className="w-full"
                ref={ dropdown }
            >
                <div className={ `flex justify-between p-2 ${ open ? 'border-b-2 border-color' : '' }` }>
                    <button
                        className="flex items-center space-x-1"
                        onClick={ setOpen }
                    >
                        <Chevron
                            className="w-4 h-4"
                            direction={ open ? 'down' : 'right' }
                        />
                        <span>
                            { label }
                        </span>
                    </button>
                    <AddButton
                        className="bg-blue-500 w-6 h-6 rounded"
                    />
                </div>
                {
                    open ? (
                        <div>
                            <ul className="p-2">
                                {
                                    items.map((item) => {
                                        return(
                                            <li
                                                className="p-2"
                                                onClick={ () => onClick(item) }
                                                key={ item.id }
                                            >
                                                { upperFirst(transChoice(item.label)) }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    ) : null
                }
            </div>
        </div>
    );

}
