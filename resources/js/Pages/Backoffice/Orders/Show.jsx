import { Head } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backoffice/ShowTable";

export default function Show({ faq }) {
    const title = t('FAQ');

    return (
        <>
			<Head title={ title } />

            <ShowTable
                title={ title }
                href={ `/backoffice/faqs/${ faq.id }/edit` }
                data={ faq }
            >
                <div className="grid grid-cols-2 gap-y-4">
                    <div className="col-span-2 flex items-center space-x-1">
                        <span>
                            { upperFirst(t('validation.attributes.id')) + t(':') }
                        </span>
                        <span>
                            { faq.id }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { upperFirst(t('validation.attributes.question')) + t(':') }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { faq.question }
                        </span>
                    </div>
                    <div className="col-span-2">
                        { upperFirst(t('validation.attributes.answer')) + t(':') }
                    </div>
                    <div className="col-span-2">
                        { faq.answer }
                    </div>
                </div>
            </ShowTable>
        </>
    );
}
