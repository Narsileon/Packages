import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
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
                            { upperFirst(transChoice('common.ids', 1)) + trans(':') }
                        </span>
                        <span>
                            { faq.id }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { upperFirst(transChoice('common.questions', 1)) + trans(':') }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { faq.question }
                        </span>
                    </div>
                    <div className="col-span-2">
                        { upperFirst(transChoice('common.answers', 1)) + trans(':') }
                    </div>
                    <div className="col-span-2">
                        { faq.answer }
                    </div>
                </div>
            </ShowTable>
        </>
    );
}
