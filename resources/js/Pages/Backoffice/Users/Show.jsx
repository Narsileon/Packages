import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backoffice/ShowTable";

export default function Show({ user }) {
    const title = upperFirst(transChoice('common.users', 1));

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
                            { upperFirst(trans('validation.attributes.id')) + trans(':') }
                        </span>
                        <span>
                            { user.data.id }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(trans('validation.attributes.username')) + trans(':') }
                        </span>
                        <span>
                            { user.data.username }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(trans('validation.attributes.last_name')) + trans(':') }
                        </span>
                        <span>
                            { user.data.last_name }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(trans('validation.attributes.email')) + trans(':') }
                        </span>
                        <span>
                            { user.data.email }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(trans('validation.attributes.first_name')) + trans(':') }
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
