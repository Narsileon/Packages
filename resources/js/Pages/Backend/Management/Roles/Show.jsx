import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backend/ShowTable";
import AppHead from "@/Shared/AppHead";

export default function Show({ role }) {
    const title = upperFirst(transChoice('permissions.roles', 1));

    return (
        <>
			<AppHead title={ title } />

            <ShowTable
                title={ title }
                href={ route('admin.roles.edit', role.data.id) }
                data={ role.data }
            >
                <div className="grid grid-cols-4 gap-y-4">
                    <div className="col-span-4 space-x-1">
                        <span>
                            { upperFirst(transChoice('common.ids', 1)) + trans(':') }
                        </span>
                        <span>
                            { role.data.id }
                        </span>
                    </div>
                    <div className="col-span-4 space-x-1">
                        <span>
                            { upperFirst(transChoice('common.names', 1)) + trans(':') }
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
