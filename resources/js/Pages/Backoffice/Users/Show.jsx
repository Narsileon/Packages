import { Head } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backoffice/ShowTable";
import Text from "@/Components/Elements/Text";

export default function Show({ user }) {
    const title = t('User');

    return (
        <>
            <Head title={ title } />

            <ShowTable
                title={ title }
                href={ `/backoffice/users/${ user.data.id }/edit` }
            >
                <div className="grid grid-cols-4 grid-rows-6 gap-y-4">
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
                    <div className="col-span-4 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.created_at')) + t(':') }
                        </span>
                        <span>
                            { user.data.created_at }
                        </span>
                    </div>
                    <div className="col-span-4 space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.updated_at')) + t(':') }
                        </span>
                        <span>
                            { user.data.updated_at }
                        </span>
                    </div>
                </div>
            </ShowTable>
        </>
    );
}
