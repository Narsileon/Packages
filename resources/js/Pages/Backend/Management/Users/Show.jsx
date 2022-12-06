import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backend/ShowTable";
import AppHead from "@/Shared/AppHead";

export default function Show({ user }) {
    const title = upperFirst(transChoice('common.users', 1));

    return (
        <>
            <AppHead title={ title } />

            <ShowTable
                title={ title }
                href={ route('admin.users.edit', user.data.id) }
                data={ user.data }
            >
                <div className="grid grid-cols-4 gap-y-4">
                    <div className="col-span-4 space-x-1">
                        <span>
                            { upperFirst(transChoice('common.ids', 1)) + trans(':') }
                        </span>
                        <span>
                            { user.data.id }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(transChoice('common.usernames', 1)) + trans(':') }
                        </span>
                        <span>
                            { user.data.username }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(transChoice('common.last_names', 1)) + trans(':') }
                        </span>
                        <span>
                            { user.data.last_name }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(transChoice('common.emails', 1)) + trans(':') }
                        </span>
                        <span>
                            { user.data.email }
                        </span>
                    </div>
                    <div className="col-span-2 space-x-1">
                        <span>
                            { upperFirst(transChoice('common.first_names', 1)) + trans(':') }
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
