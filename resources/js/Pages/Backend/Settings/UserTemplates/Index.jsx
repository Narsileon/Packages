import { useState } from "react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import { Table } from "@/Components/Tables/Index";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import AppHead from "@/Shared/AppHead";
import { Inertia } from "@inertiajs/inertia";

export default function Index({ tables }) {
    const [template, setTemplate] = useState(null);

    function displayTable(key) {
        setTemplate(null);

        const timeout = setTimeout(() => {
            setTemplate(key);
        }, 300);

        return () => clearTimeout(timeout);
    }

    return (
        <>
        	<AppHead title={ transChoice('common.templates', 2) } />

            <div className="grid grid-cols-2 md:grid-cols-4 h-full gap-x-8 gap-y-4">
                <div className="col-span-2">
                    <div className="flex items-center space-x-4">
                        <span className="whitespace-nowrap">
                            { ` ${ trans('Select a template to edit:') } ` }
                        </span>
                        <select
                            className="field max-w-fit"
                            onChange={ (event) => displayTable(tables[event.target.value]) }
                        >
                            {
                                Object.keys(tables).map((key) => {
                                    return (
                                        <option
                                            value={ key }
                                            key={ key }
                                        >
                                            { key }
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="col-span-2 flex justify-end">
                    <PrimaryButton
                        label={ trans('Reset the template') }
                        onClick={ () => Inertia.patch(route('admin.user_templates.reset'), template, {
                            preserveState: false,
                        }) }
                    />
                </div>
                <div className="col-span-2 md:col-span-4">
                    {
                        template ? (
                            <TemplateTable
                                columns={ template.columns }
                                template={ template }
                            />
                        ) : null
                    }
                </div>
            </div>
        </>
    );
}

const TemplateTable = ({ columns, template }) => {
    const [table] = useTable([], columns, template, false);

    return (
        <Table
            table={ table }
            horizontalScrolling={ true }
        />
    );
}
