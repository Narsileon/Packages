import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backend/ShowTable";

export default function Show({ headerLink }) {
    const title = upperFirst(transChoice('common.header_link', 1));

    return (
        <>
			<Head title={ title } />

            <ShowTable
                title={ title }
                href={ `/admin/footer_links/${ headerLink.id }/edit` }
                data={ headerLink }
            >
                <div className="grid grid-cols-2 gap-y-4">
                    <div className="col-span-2 flex items-center space-x-1">
                        <span>
                            { upperFirst(trans('validation.attributes.id')) + trans(':') }
                        </span>
                        <span>
                            { headerLink.id }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { upperFirst(trans('validation.attributes.label')) + trans(':') }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { headerLink.label }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { upperFirst(trans('validation.attributes.url')) + trans(':') }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { headerLink.url }
                        </span>
                    </div>
                </div>
            </ShowTable>
        </>
    );
}
