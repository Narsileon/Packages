import { useInterval } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Dropdown } from "@/Components/Elements/Dropdowns";
import Icon from "@/Shared/Svg/Icon";

export default function TableSettings({ table }) {
    const autoUpdate = table.getState().autoUpdate;
    const tableSettings = usePage().props.tableSettings;
    const url = usePage().url;

    useInterval(() => {
        Inertia.visit(url, {
            preserveScroll: true,
            preserveState: true,
        });
    }, autoUpdate > 0 ? autoUpdate * 1000 : null);

    return (
        <Dropdown
            trigger={ <Icon name="cog" /> }
            triggerClasses="primary-button"
            placement="bottom-end"
            placementOffset={ 8 }
            showChevron={ false }
        >
            <div className="m-1 p-1 space-y-2">
                <section id="parameters">
                    <div className="space-y-2">
                        <h1 className="font-bold whitespace-nowrap">
                            { upperFirst(transChoice('common.settings', 2)) }
                        </h1>

                        <hr className="border-color" />

                        <section id="column-visibility">
                            <h1 className="whitespace-nowrap">
                                { upperFirst(transChoice('common.columns', 2)) + trans(':') }
                            </h1>

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
                            <h1 className="whitespace-nowrap">
                                { upperFirst(transChoice('common.refresh_rates', 1)) + trans(':') }
                            </h1>
                            <input
                                className="field min-w-fit text-right"
                                type="number"
                                value={ table.getState().autoUpdate }
                                onChange={ (event) => table.options.meta.setAutoUpdate(event.target.value) }
                            />
                        </section>
                    </div>
                </section>

                <hr className="border-color" />

                <section id="footer">
                    <button
                        className="primary-button w-full"
                        onClick={ () => Inertia.patch(route('admin.user_templates.reset'), tableSettings, {
                            preserveState: false,
                        }) }
                    >
                        { trans('Reset the template') }
                    </button>
                </section>
            </div>
        </Dropdown>
    );
}
