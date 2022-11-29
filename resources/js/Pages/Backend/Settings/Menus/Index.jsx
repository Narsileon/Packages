import { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import SortableItems from "./SortableItems";
import SortableTree from "./SortableTree";
import AppHead from "@/Shared/AppHead";
import { upperFirst } from "lodash";

export default function Index({ menuItems }) {
    const menus = usePage().props.shared.menus;

    const [menu, setMenu] = useState(usePage().props.shared.menus.backend)

    function addToList(item) {
        setMenu(previousMenu => [...previousMenu, item])
    }

    return (
        <>
        	<AppHead title={ transChoice('common.menus', 2) } />

            <div className="grid grid-cols-4 h-full gap-x-8 gap-y-4">
                <div className="col-span-4">
                    <button
                        className="link-text"
                        onClick={ () => setMenu([]) }
                    >
                        { `${ trans('Create a new menu') } ` }
                    </button>
                    <span>
                        { ` ${ trans('or select a menu to edit:') } ` }
                    </span>
                    <select
                        className="field"
                        onChange={ (event) => setMenu(menus[event.target.value]) }
                    >
                        {
                            Object.keys(menus).map((key) => {
                                return (
                                    <option
                                        value={ key }
                                        key={ key }
                                    >
                                        { key }
                                    </option>
                                );
                            })
                        }
                    </select>
                </div>
                <div className="col-span-1 min-h-0 overflow-y-auto">
                    <section id="sortable-items">
                        <div className="space-y-2">
                            <SortableItems
                                label={ upperFirst(transChoice('common.categories', 2)) }
                                items={ menuItems.data.filter(item => item.type == "category") }
                                onClick={ addToList }
                            />
                            <SortableItems
                                label={ upperFirst(transChoice('common.pages', 2)) }
                                items={ menuItems.data.filter(item => item.type == "page") }
                                onClick={ addToList }
                            />
                        </div>
                    </section>
                </div>
                <div className="col-span-3 min-h-0 overflow-y-auto">
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
