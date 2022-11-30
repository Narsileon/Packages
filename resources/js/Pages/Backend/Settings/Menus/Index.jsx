import { useState } from "react";
import { useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import AppHead from "@/Shared/AppHead";
import SortableItems from "./SortableItems";
import SortableTree from "./SortableTree";
import Create from "./Menu Items/Create";
import Edit from "./Menu Items/Edit";

export default function Index({ menus, menuItems }) {
    const [menu, setMenu] = useState(menus[0] ?? null);
    const [layout, setLayout] = useState(menu ? menu.template : null);
    const [create, showCreate] = useToggle(false);
    const [edit, showEdit] = useState(false);
    const [menuItem, setMenuItem] = useState(null);

    function editMenuItem(menuItem) {
        setMenuItem(menuItem);
        showEdit(true);
    };

    function addToList(item) {
        setLayout(previousMenu => [...previousMenu, item])
    }

    function update() {
        Inertia.patch('/admin/menus/' + menu.id, {
            template: layout,
        });
    }

    const options = [
        {
            label: 'common.categories',
            type: 'category',
        },
        {
            label: 'common.pages',
            type: 'page',
        },
    ]

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
                            {
                                options.map((option) => {
                                    return (
                                        <SortableItems
                                            items={ menuItems.data.filter(item => item.type == option.type) }
                                            option={ option }
                                            onClick={ addToList }
                                            showCreate={ showCreate }
                                            editMenuItem={ editMenuItem }
                                            key={ option.type }
                                        />
                                    );
                                })
                            }
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

            {
                create ? (
                    <Create
                        options={ options }
                        showCreate={ showCreate }
                    />
                ) : null
            }

            {
                edit ? (
                    <Edit
                        menuItem={ menuItem }
                        options={ options }
                        showEdit={ showEdit }
                    />
                ) : null
            }
        </>
    );
}
