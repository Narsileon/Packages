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
import Toggle from "@/Components/Elements/Toggle";

export default function Index({ menus, menuItems, icons }) {
    const [menu, setMenu] = useState(null);
    const [layout, setLayout] = useState(null);
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
            active: menu.active,
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

    function onMenuChanged(value) {
        if (value == 'none') {
            setMenu(null);
            setLayout(null);
        } else {
            setMenu(menus[value]);
            setLayout(menus[value].template);
        }
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
                        onChange={ (event) => onMenuChanged(event.target.value) }
                    >
                        <option
                            value={ 'none' }
                            key={ 'none' }
                        >
                            { '---' }
                        </option>
                        {
                            menus.map((menu, index) => {
                                return (
                                    <option
                                        value={ index }
                                        key={ index }
                                    >
                                        { upperFirst(trans(`common.${ menu.category }`)) }
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
                    {
                        menu ? (
                            <section id="edit-section">
                                <div className="flex flex-col space-y-4">
                                    <section id="header">
                                        <div className="grid grid-cols-1 md:grid-cols-2 mr-4">
                                            <div className="col-span-1">
                                                <div className="flex items-center justify-start space-x-2">
                                                    <span>
                                                        { upperFirst(transChoice('common.menu', 1)) + trans(':') }
                                                    </span>
                                                    <span>
                                                        { upperFirst(trans(`common.${ menu.category }`)) }
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="flex items-center justify-end space-x-2">
                                                    <span>
                                                        { upperFirst(trans('common.active')) + trans(':') }
                                                    </span>
                                                    <Toggle
                                                        value={ menu.active }
                                                        onChange={ () => setMenu({ ...menu, active: !menu.active }) }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <hr className="border-color" />
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
                            </section>
                        ) : null
                    }
                </div>
            </div>

            {
                create ? (
                    <Create
                        options={ options }
                        icons={ icons }
                        showCreate={ showCreate }
                    />
                ) : null
            }

            {
                edit ? (
                    <Edit
                        menuItem={ menuItem }
                        options={ options }
                        icons={ icons }
                        showEdit={ showEdit }
                    />
                ) : null
            }
        </>
    );
}
