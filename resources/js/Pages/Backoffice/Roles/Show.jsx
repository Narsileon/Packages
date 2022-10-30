import { Head } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backoffice/ShowTable";
import Text from "@/Components/Elements/Text";

export default function Show({ role }) {
    const title = t('Role');

    return (
        <>
			<Head title={ title } />

            <ShowTable
                title={ title }
                href={ `/backoffice/roles/${ role.data.id }/edit` }
            >
                <div className="grid grid-cols-4 grid-rows-6 gap-y-4">
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.id')) + t(':') }
                        </span>
                        <span>
                            { role.data.id }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.name')) + t(':') }
                        </span>
                        <span>
                            { role.data.name }
                        </span>
                    </div>
                    <div className="col-span-4 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.created_at')) + t(':') }
                        </span>
                        <span>
                            { role.data.created_at }
                        </span>
                    </div>
                    <div className="col-span-4 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.updated_at')) + t(':') }
                        </span>
                        <span>
                            { role.data.updated_at }
                        </span>
                    </div>
                </div>
            </ShowTable>
        </>
    );
}
