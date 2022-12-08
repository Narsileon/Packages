import { Inertia } from "@inertiajs/inertia";
import { trans } from "@/narsil-localization";
import { upperFirst } from "lodash";

export default function UserTemplateActions({ tableSettings }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
            <div className="col-span-1">
                <button
                    className="primary-button w-full"
                    onClick={ () => Inertia.patch(route('admin.userTemplates.save', tableSettings.id), tableSettings, {
                        preserveState: true,
                    }) }
                >
                    { upperFirst(trans('common.template_save')) }
                </button>
            </div>
            <div className="col-span-1">
                <button
                    className="primary-button w-full"
                    onClick={ () => Inertia.patch(route('admin.userTemplates.load', tableSettings.id), tableSettings, {
                        preserveState: false,
                    }) }
                >
                    { upperFirst(trans('common.template_load')) }
                </button>
            </div>
            <div className="col-span-1 md:col-span-2">
                <button
                    className="primary-button w-full"
                    onClick={ () => Inertia.patch(route('admin.userTemplates.reset', tableSettings.id), tableSettings, {
                        preserveState: false,
                    }) }
                >
                    { upperFirst(trans('common.template_reset')) }
                </button>
            </div>
        </div>
    );
}