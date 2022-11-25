import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import ShowTable from "@/Components/Backend/ShowTable";
import AppHead from "@/Shared/AppHead";

export default function Show({ headerLink }) {
    const title = upperFirst(transChoice('common.header_link', 1));

    return (
        <>
			<AppHead title={ title } />

            <ShowTable
                title={ title }
                href={ `/admin/footer_links/${ headerLink.id }/edit` }
                data={ headerLink }
            >
                <div className="grid grid-cols-2 gap-y-4">
                    <div className="col-span-2 flex items-center space-x-1">
                        <span>
                            { upperFirst(transChoice('common.ids', 1)) + trans(':') }
                        </span>
                        <span>
                            { headerLink.id }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { upperFirst(transChoice('common.designations', 1)) + trans(':') }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { headerLink.label }
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span>
                            { upperFirst(transChoice('common.urls', 1)) + trans(':') }
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
