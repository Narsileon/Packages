import { usePage } from "@inertiajs/inertia-react";
import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Dropdown } from "@/Components/Elements/Dropdowns";
import { AutoUpdate, ColumnVisibility, UserTemplateActions } from "./Index";
import Icon from "@/Shared/Svg/Icon";

export default function TableSettings({
    table,
    actions = true
}) {
    const tableSettings = usePage().props.tableSettings;

    return (
        <Dropdown
            trigger={ <Icon name="cog" /> }
            triggerClasses="primary-button"
            placement="bottom-end"
            placementOffset={ 8 }
            closeOnSelect={ false }
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
                            <ColumnVisibility table={ table } />
                        </section>

                        {
                            table.options.meta.manual ? (
                                <section id="auto-update">
                                    <AutoUpdate table={ table } />
                                </section>
                            ) : null
                        }
                    </div>
                </section>
                {
                    actions ? (
                        <>
                            <hr className="border-color" />

                            <section id="footer">
                                <UserTemplateActions tableSettings={ tableSettings } />
                            </section>
                        </>
                    ) : null
                }
            </div>
        </Dropdown>
    );
}
