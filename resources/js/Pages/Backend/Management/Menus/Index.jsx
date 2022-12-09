import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import IconButton from "@/Components/Elements/Buttons/IconButton";
import AppHead from "@/Shared/AppHead";
import Create from "./Create";
import Edit from "./Edit";

export default function Index({ menus, menuItems }) {
    const [menu, setMenu] = useState(null);

    function onMenuChange(menu) {
        setMenu(null);

        const timeout = setTimeout(() => {
            setMenu(menu);
        }, 300);

        return () => clearTimeout(timeout);
    }

    return (
        <>
        	<AppHead title={ transChoice('common.menus', 2) } />

            <div className="grid grid-cols-2 md:grid-cols-4 h-full gap-x-8 gap-y-4">
                <div className="col-span-2 md:col-span-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div>
                                <button
                                    className="link-text"
                                    onClick={ () => setMenu(null) }
                                >
                                    { `${ trans('Create a new menu') } ` }
                                </button>
                                <span>
                                    { ` ${ trans('or select a menu to edit:') } ` }
                                </span>
                            </div>
                            <select
                                className="field max-w-fit"
                                onChange={ (event) => onMenuChange(event.target.value != 'none' ? menus[event.target.value] : null) }
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
                                                { upperFirst(menu.title) }
                                            </option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        {
                            menu ? (
                                <IconButton
                                    className="primary-button"
                                    icon="duplicate"
                                    onClick={ () => Inertia.patch(route('admin.menus.duplicate', menu.id)) }
                                />
                            ) : null
                        }
                    </div>
                </div>
                {
                    menu ? (
                        <Edit
                            menu={ menu }
                            menuItems={ menuItems }
                        />
                    ) : (
                        <Create
                            menuItems={ menuItems }
                        />
                    )
                }
            </div>
        </>
    );
}
