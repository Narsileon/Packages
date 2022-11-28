import { transChoice } from "@/narsil-localization";
import { useDropdown } from "@/narsil-react";
import { upperFirst } from "lodash";

export default function SortableItems({
    items,
    addToList,
}) {
    const types = [...new Set(items.map(item => item.type))]

    return (
        <div className="space-y-2">
        {
            types.map((type) => {
                return(
                    <SortableCategory
                        type={ type}
                        items={ items.filter(item => item.type == type) }
                        addToList={ addToList }
                        key={ type }
                    />
                );
            })
        }
        </div>
    );
}

const SortableCategory = ({
    type,
    items,
    addToList,
}) => {
    const[dropdown, open, setOpen] = useDropdown()

    return (
        <div className="primary-background">
            <div ref={ dropdown }>
                <button
                    className="w-full border border-color p-2 rounded"
                    onClick={ setOpen }
                >
                    { type }
                </button>
                {
                    open ? (
                        <ul>
                            {
                                items.map((item) => {
                                    return(
                                        <SortableItem
                                            item={ item }
                                            addToList={ addToList }
                                            key={ item.id }
                                        />
                                    )
                                })
                            }
                        </ul>
                    ) : null
                }
            </div>
        </div>
    )
};

const SortableItem = ({
    item,
    addToList
}) => {
    return (
        <li>
            <button onClick={ () => addToList(item) }>
                { upperFirst(transChoice(item.label)) }
            </button>
        </li>
    )
};