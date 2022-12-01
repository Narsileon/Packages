import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { useDropdown } from "@/narsil-react";
import Chevron from "@/Shared/Svg/Chevron";

export default function SortableItems({
    items,
    option,
    onClick,
}) {
    const[dropdown, open, setOpen] = useDropdown(false, false);

    return (
        <div className="primary-background rounded">
            <div
                className="w-full"
                ref={ dropdown }
            >
                <div className={ `p-2 ${ open ? 'border-b-2 border-color' : '' }` }>
                    <button
                        className="flex items-center space-x-1"
                        onClick={ setOpen }
                    >
                        <Chevron
                            className="w-4 h-4"
                            direction={ open ? 'down' : 'right' }
                        />
                        <span>
                            { upperFirst(transChoice(option.label, 2)) }
                        </span>
                    </button>
                </div>
                {
                    open ? (
                        <div>
                            <ul className="p-1">
                                {
                                    items.map((item) => {
                                        return(
                                            <li
                                                className="p-2"
                                                onClick={ () => onClick(item) }
                                                key={ item.id }
                                            >
                                                <span>
                                                    { upperFirst(transChoice(item.label)) }
                                                </span>

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
