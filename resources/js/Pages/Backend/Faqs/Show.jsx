import { Head } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backend/ShowTable";

export default function Show({ faq }) {
    const title = trans('FAQ');

    return (
        <>
			<Head title={ title } />

            <ShowTable
                title={ title }
                href={ `/admin/faqs/${ faq.id }/edit` }
                data={ faq }
            >
                <div className="grid grid-cols-2 gap-y-4">
                    <div className="col-span-2 flex items-center space-x-1">
                        <span>
                            { upperFirst(trans('validation.attributes.id')) + trans(':') }
                        </span>
                        <span>
                            { faq.id }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { upperFirst(trans('validation.attributes.question')) + trans(':') }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { faq.question }
                        </span>
                    </div>
                    <div className="col-span-2">
                        { upperFirst(trans('validation.attributes.answer')) + trans(':') }
                    </div>
                    <div className="col-span-2">
                        { faq.answer }
                    </div>
                </div>
            </ShowTable>
        </>
    );
}
