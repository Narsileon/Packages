import { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { transChoice } from "@/narsil-localization";
import SortableItems from "./SortableItems";
import SortableTree from "./SortableTree";
import AppHead from "@/Shared/AppHead";

export default function Index({ menuItems }) {
    const [menu, setMenu] = useState(usePage().props.shared.menus.backend)

    function addToList(item)
    {
        setMenu(previousMenu => [...previousMenu, item])
    }

    return (
        <>
        	<AppHead title={ transChoice('common.menus', 2) } />

            <div className="grid grid-cols-2 h-full gap-x-8">
                <div className="col-span-1 min-h-0 overflow-y-auto">
                    <section id="sortable-items">
                        <SortableItems
                            items={ menuItems.data }
                            addToList={ addToList }
                        />
                    </section>
                </div>
                <div className="col-span-1 min-h-0 overflow-y-auto">
                    <section id="sortable-tree">
                        <SortableTree
                            data={ menu }
                            setData={ setMenu }
                            collapsible
                            indicator
                            removable
                        />
                    </section>
                </div>
            </div>
        </>
    );
}
