import { transChoice } from "@/narsil-localization";
import { useDropdown } from "@/narsil-react";
import { upperFirst } from "lodash";

export default function SortableItems({ items }) {
    const types = [...new Set(items.map(item => item.type))]

    return (
        <div>
        {
            types.map((type) => {
                return(
                    <SortableCategory
                        type={ type}
                        items={ items.filter(item => item.type == type) }
                        key={ type }
                    />
                );
            })
        }
        </div>
    );
}

const SortableCategory = ({ type, items }) => {
    const[dropdown, open, setOpen] = useDropdown()

    return (
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
                                        key={ item.id }
                                    />
                                )
                            })
                        }
                    </ul>
                ) : null
            }

        </div>
    )
};

const SortableItem = ({ item }) => {
    return (
        <li>
            <button>
                { upperFirst(transChoice(item.label)) }
            </button>
        </li>
    )
};