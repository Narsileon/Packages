import { useRef } from "react";
import { useClickAway, useInterval, useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import Icon from "@/Shared/Svg/Icon";

export default function TableSettings({ table }) {
    const [show, setShow] = useToggle(false);

    const element = useRef();

    useClickAway(element, () => setShow(false));

    const url = usePage().url;
    const tableSettings = usePage().props.tableSettings;
    const autoUpdate = table.getState().autoUpdate;

    useInterval(() => {
        Inertia.visit(url, {
            preserveScroll: true,
            preserveState: true,
        });
    }, autoUpdate > 0 ? autoUpdate * 1000 : null);

    return (
        <div
            className="relative"
            ref={ element }
        >
            <button
                className="primary-button"
                onClick={ setShow }
            >
                <Icon name="cog" />
            </button>
            {
                show ? (
                    <div
                        className="absolute top-12 right-0 primary-background border border-color min-w-fit p-2 rounded z-10 space-y-4"
                    >
                        <section id="column-visibility">
                            <span>
                                { upperFirst(transChoice('common.columns', 2)) + trans(':') }
                            </span>
                            <div>
                                {
                                    table.getAllLeafColumns().map(column => {
                                        return (
                                            column.columnDef.header ? (
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
                                                            { column.columnDef.header ? upperFirst(transChoice(column.columnDef.header, 1)) : null }
                                                        </span>
                                                    </label>
                                                </div>
                                            ) : null
                                        )
                                    })
                                }
                            </div>
                        </section>
                        <section id="refresh-rate">
                            <div>
                                <label className="flex items-center flex-row space-x-2">
                                    <span className="whitespace-nowrap">
                                        { upperFirst(transChoice('common.refresh_rates', 1)) + trans(':') }
                                    </span>
                                    <input
                                        className="field max-w-fit text-right"
                                        type="number"
                                        value={ table.getState().autoUpdate }
                                        onChange={ (event) => table.options.meta.setAutoUpdate(event.target.value) }
                                    />
                                </label>
                            </div>
                        </section>
                        <section id="footer">
                            <PrimaryButton
                                label={ trans('Reset the template') }
                                onClick={ () => Inertia.patch(route('admin.user_templates.reset'), tableSettings, {
                                    preserveState: false,
                                }) }
                            />
                        </section>
                    </div>
                ) : null
            }
        </div>
    );
}
