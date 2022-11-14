import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backend/ShowTable";

export default function Show({ footerLink }) {
    const title = upperFirst(transChoice('common.footer_links', 1));

    return (
        <>
			<Head title={ title } />

            <ShowTable
                title={ title }
                href={ `/admin/footer_links/${ footerLink.id }/edit` }
                data={ footerLink }
            >
                <div className="grid grid-cols-2 gap-y-4">
                    <div className="col-span-2 flex items-center space-x-1">
                        <span>
                            { upperFirst(trans('validation.attributes.id')) + trans(':') }
                        </span>
                        <span>
                            { footerLink.id }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { upperFirst(trans('validation.attributes.label')) + trans(':') }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { footerLink.label }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { upperFirst(trans('validation.attributes.url')) + trans(':') }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { footerLink.url }
                        </span>
                    </div>
                </div>
            </ShowTable>
        </>
    );
}
