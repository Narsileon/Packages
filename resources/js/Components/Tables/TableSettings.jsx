import { useRef, useState } from "react";
import { useClickAway, useInterval, useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import Icon from "@/Shared/Svg/Icon";

export default function TableSettings({ table }) {
    const [show, setShow] = useToggle(false);
    const [timer, setTimer] = useState(2);

    const element = useRef();

    useClickAway(element, () => setShow(false));

    const url = usePage().url;

    useInterval(
        () => {
            console.log('update');

            Inertia.visit(url, {
                preserveScroll: true,
                preserveState: true,
            });
        },
        timer > 0 ? timer * 1000 : null
    );

    return (
        <div
            className="relative"
            ref={ element }
        >
            <button
                className="primary-button"
                onClick={ setShow }
            >
                <Icon
                    className="w-6 h-6"
                    name="cog"
                />
            </button>
            {
                show && (
                    <div
                        className="absolute top-12 right-0 primary-background border border-color rounded z-10"
                    >
                        <div>
                            {
                                table.getAllLeafColumns().map(column => {
                                    return (
                                        column.columnDef.header && (
                                            <div
                                                className="flex px-1 whitespace-nowrap"
                                                key={ column.id }
                                            >
                                                <label className="flex space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        checked={ column.getIsVisible() }
                                                        onChange={ column.getToggleVisibilityHandler() }
                                                    />
                                                    <span>
                                                        { upperFirst(transChoice(column.columnDef.header, 1)) }
                                                    </span>
                                                </label>
                                            </div>
                                        )
                                    )
                                })
                            }
                        </div>
                        <div>
                            <label className="flex flex-col space-x-2">
                                <span>
                                    { "autoUpdate" }
                                </span>
                                <input
                                    className="field"
                                    type="number"
                                    value={ timer }
                                    onChange={ (event) => setTimer(event.target.value) }
                                />
                            </label>
                        </div>
                    </div>
                )
            }
        </div>
    );
}