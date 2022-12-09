import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/Components/Tables/pia-table";
import { upperFirst } from "lodash";
import { Table, TableSettings } from "@/Components/Tables/Index";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import AppHead from "@/Shared/AppHead";

export default function Index({ tables }) {
    const [table, setTable] = useState(tables.data[0]);

    function displayTable(key) {
        setTable(null);

        const timeout = setTimeout(() => {
            setTable(key);
        }, 300);

        return () => clearTimeout(timeout);
    }

    return (
        <>
        	<AppHead title={ transChoice('common.templates', 2) } />

            <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 h-full gap-x-8 gap-y-4">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-4">
                            <span className="whitespace-nowrap">
                                { ` ${ trans('Select a template to edit:') } ` }
                            </span>
                            <select
                                className="field max-w-fit"
                                onChange={ (event) => displayTable(tables.data[event.target.value]) }
                            >
                                {
                                    tables.data.map((table, index) => {
                                        return (
                                            <option
                                                value={ index }
                                                key={ index }
                                            >
                                                { table.type }
                                            </option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-span-2 flex justify-end">
                        <PrimaryButton
                            label={ trans('common.template_reset') }
                            onClick={ () => Inertia.delete(route('admin.templates.destroy', table.id), {
                                preserveState: false,
                            }) }
                        />
                    </div>
                </div>

                <hr className="border-color" />

                <section>
                    {
                        table ? (
                            <TableTemplate
                                columns={ table.columns }
                                template={ table }
                            />
                        ) : null
                    }
                </section>
            </div>
        </>
    );
}

const TableTemplate = ({ columns, template }) => {
    const [table] = useTable([], columns, template);

    return (
        <div className="space-y-4">
            <div className="flex justify-between">
                <h1>
                    { upperFirst(transChoice('common.layouts', 1)) }
                </h1>

                <TableSettings table={ table } actions={ false } />
            </div>

            <Table
                table={ table }
                horizontalScrolling={ true }
            />
        </div>
    );
}
