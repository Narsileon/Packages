import { transChoice } from "@/narsil-localization";
import { usePage } from "@inertiajs/inertia-react";
import SortableItems from "./SortableItems";
import SortableTree from "./SortableTree";
import AppHead from "@/Shared/AppHead";

export default function Index({ menuItems }) {
    const backendMenu = usePage().props.shared.menus.backend

    return (
        <>
        	<AppHead title={ transChoice('common.menus', 2) } />

            <div className="grid grid-cols-2 h-full gap-x-8">
                <div className="col-span-1 min-h-0 overflow-y-auto">
                    <section id="sortable-items">
                        <SortableItems
                            items={ menuItems.data }
                        />
                    </section>
                </div>
                <div className="col-span-1 min-h-0 overflow-y-auto">
                    <section id="sortable-tree">
                        <SortableTree
                            data={ backendMenu }
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
