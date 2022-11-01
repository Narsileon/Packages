import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backoffice/ShowTable";

export default function Show({ role }) {
    const title = upperFirst(p('permissions.roles', 1));

    return (
        <>
			<Head title={ title } />

            <ShowTable
                title={ title }
                href={ `/backoffice/roles/${ role.data.id }/edit` }
                data={ role.data }
            >
                <div className="grid grid-cols-4 gap-y-4">
                    <div className="col-span-4 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.id')) + t(':') }
                        </span>
                        <span>
                            { role.data.id }
                        </span>
                    </div>
                    <div className="col-span-4 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.name')) + t(':') }
                        </span>
                        <span>
                            { role.data.name }
                        </span>
                    </div>
                </div>
            </ShowTable>
        </>
    );
}
