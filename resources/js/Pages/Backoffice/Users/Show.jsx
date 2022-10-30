import { Head } from "@inertiajs/inertia-react";
import { p, t } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backoffice/ShowTable";

export default function Show({ user }) {
    const title = upperFirst(p('common.users', 1));

    return (
        <>
            <Head title={ title } />

            <ShowTable
                title={ title }
                href={ `/backoffice/users/${ user.data.id }/edit` }
                data={ user.data }
            >
                <div className="grid grid-cols-4 gap-y-4">
                    <div className="col-span-4 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.id')) + t(':') }
                        </span>
                        <span>
                            { user.data.id }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.username')) + t(':') }
                        </span>
                        <span>
                            { user.data.username }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.last_name')) + t(':') }
                        </span>
                        <span>
                            { user.data.last_name }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.email')) + t(':') }
                        </span>
                        <span>
                            { user.data.email }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.first_name')) + t(':') }
                        </span>
                        <span>
                            { user.data.first_name }
                        </span>
                    </div>
                </div>
            </ShowTable>
        </>
    );
}
