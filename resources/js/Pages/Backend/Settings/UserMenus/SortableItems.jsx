import { transChoice } from "@/narsil-localization";
import { Collapse, ItemButton } from "@/Components/Elements/Dropdowns";

export default function SortableItems({
    title,
    items,
    setData,
}) {
    function addToList(item) {
        setData((previousData) => ({
            ...previousData,
            template: [...previousData.template, item]
        }));
    }

    return (
        <div>
            <Collapse
                label={ transChoice(title, 2) }
                className="primary-background border-2 border-color rounded-lg p-2 space-y-2"
            >
                <ul>
                    {
                        items.map((item) => {
                            return(
                                <ItemButton
                                    label={ transChoice(item.label) }
                                    onClick={ () => addToList(item) }
                                    key={ item.id }
                                />
                            )
                        })
                    }
                </ul>
            </Collapse>
        </div>
    );
}
