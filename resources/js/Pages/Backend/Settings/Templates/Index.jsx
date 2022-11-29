import { useState } from "react";
import { trans, transChoice } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import TemplateTable from "./TemplateTable";

export default function Index({ templates }) {
    const [template, setTemplate] = useState(null);

    function displayTable(key) {
        setTemplate(null);

        const timeout = setTimeout(() => {
            setTemplate(key);
        }, 300);

        return () => clearTimeout(timeout)
    }

    return (
        <>
        	<AppHead title={ transChoice('common.templates', 2) } />

            <div className="grid grid-cols-4 h-full gap-x-8 gap-y-4">
                <div className="col-span-4">
                    <span>
                        { ` ${ trans('Select a template to edit:') } ` }
                    </span>
                    <select
                        className="field"
                        onChange={ (event) => displayTable(templates.data[event.target.value]) }
                    >
                        {
                            templates && Object.keys(templates.data).map((key) => {
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
                <div className="col-span-4">
                    {
                        template ? (
                            <TemplateTable
                                columns={ templates.columns[template.name] }
                                template={ template }
                            />
                        ) : null
                    }
                </div>
            </div>
        </>
    );
}
