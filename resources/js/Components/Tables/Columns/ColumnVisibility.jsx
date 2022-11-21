import { useRef } from "react";
import { useClickAway, useToggle } from "react-use";
import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import Icon from "@/Shared/Svg/Icon";

export default function ColumnVisibility({ table }) {
    const [show, setShow] = useToggle(false);

    const element = useRef();

    useClickAway(element, () => setShow(false));

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
                )
            }
        </div>
    );
}
