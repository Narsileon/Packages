import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";
import DropdownItem from "@/Components/Elements/Dropdowns/DropdownItem";

export default function SortableItems({
    items,
    addToList,
}) {
    const types = [...new Set(items.map(item => item.type))].sort();

    return (
        <div className="space-y-2">
        {
            types.map((type) => {
                return(
                    <div
                        className="primary-background"
                        key={ type }
                    >
                        <Dropdown trigger={ type }>
                            <ul className="p-2">
                                {
                                    items.map((item) => {
                                        return(
                                            <DropdownItem
                                                label={ upperFirst(transChoice(item.label)) }
                                                onClick={ () => addToList(item) }
                                                key={ item.id }
                                            />
                                        )
                                    })
                                }
                            </ul>
                        </Dropdown>
                    </div>
                );
            })
        }
        </div>
    );
}
