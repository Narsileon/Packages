import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { useRemember } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import AppHead from "@/Shared/AppHead";
import SortableItems from "./SortableItems";
import SortableTree from "./SortableTree";

export default function Index({ menus, menuItems }) {
    const [menu, setMenu] = useState(menus[0] ?? null)
    const [layout, setLayout] = useState(menu ? menu.template : null);

    function addToList(item) {
        setLayout(previousMenu => [...previousMenu, item])
    }

    function update() {
        Inertia.patch('/admin/menus/' + menu.id, {
            template: layout,
        });
    }

    return (
        <>
        	<AppHead title={ transChoice('common.menus', 2) } />

            <div className="grid grid-cols-2 md:grid-cols-4 h-full gap-x-8 gap-y-4">
                <div className="col-span-2">
                    <button
                        className="link-text"
                        onClick={ () => setLayout([]) }
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
                            menus.map((menu, index) => {
                                return (
                                    <option
                                        value={ index }
                                        key={ menu.title }
                                    >
                                        { upperFirst(trans(`common.${ menu.title }`)) }
                                    </option>
                                );
                            })
                        }
                    </select>
                </div>
                <div className="col-span-2 flex justify-end">
                    <PrimaryButton
                        label={ trans('common.update') }
                        onClick={ update }
                    />
                </div>
                <div className="col-span-2 md:col-span-1 min-h-0 overflow-y-auto">
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
                <div className="col-span-2 md:col-span-3 min-h-0 overflow-y-auto">
                    <section id="sortable-tree">
                        {
                            layout ? (
                                <SortableTree
                                    data={ layout }
                                    setData={ setLayout }
                                    collapsible
                                    indicator
                                    removable
                                />
                            ) : null
                        }

                    </section>
                </div>
            </div>
        </>
    );
}
