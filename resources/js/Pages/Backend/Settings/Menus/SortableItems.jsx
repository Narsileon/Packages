import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { useDropdown } from "@/narsil-react";
import Chevron from "@/Shared/Svg/Chevron";

export default function SortableItems({
    items,
    option,
    setData,
}) {
    const[dropdown, open, setOpen] = useDropdown(false, false);

    function addToList(item) {
        setData((previousData) => ({
            ...previousData,
            template: [...previousData.template, item]
        }));
    }

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
                                                onClick={ () => addToList(item) }
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
