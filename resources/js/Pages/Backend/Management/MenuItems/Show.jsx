import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backend/ShowTable";
import AppHead from "@/Shared/AppHead";

export default function Show({ menuItem }) {
    const title = upperFirst(transChoice('common.menu_items', 1));

    return (
        <>
			<AppHead title={ title } />

            <ShowTable
                title={ title }
                href={ route('admin.menu_items.edit', menuItem.id) }
                data={ menuItem }
            >
                <div className="grid grid-cols-2 gap-y-4">
                    <div className="col-span-2 flex items-center space-x-1">
                        <span>
                            { upperFirst(transChoice('common.ids', 1)) + trans(':') }
                        </span>
                        <span>
                            { menuItem.id }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { upperFirst(transChoice('common.designations', 1)) + trans(':') }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { menuItem.label }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { upperFirst(transChoice('common.urls', 1)) + trans(':') }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { menuItem.url }
                        </span>
                    </div>
                </div>
            </ShowTable>
        </>
    );
}
