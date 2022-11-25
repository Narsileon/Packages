import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backend/ShowTable";

export default function Show({ order }) {
    const title = transChoice('common.orders', 1);

    return (
        <>
			<Head title={ title } />

            <ShowTable
                title={ title }
                href={ `/admin/faqs/${ order.id }/edit` }
                data={ order }
            >
                <div className="grid grid-cols-2 gap-y-4">
                    <div className="col-span-2 flex items-center space-x-1">
                        <span>
                            { upperFirst(transChoice('common.ids', 1)) + trans(':') }
                        </span>
                        <span>
                            { order.id }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { upperFirst(transChoice('common.types', 1)) + trans(':') }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { order.type }
                        </span>
                    </div>
                    <div className="col-span-2">
                        { upperFirst(transChoice('common.statuses', 1)) + trans(':') }
                    </div>
                    <div className="col-span-2">
                        { order.status }
                    </div>
                </div>
            </ShowTable>
        </>
    );
}
