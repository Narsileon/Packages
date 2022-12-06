import { Inertia } from "@inertiajs/inertia";
import { useInterval } from "react-use";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";

export default function AutoUpdate({ table }) {
    const autoUpdate = table.getState().autoUpdate;

    useInterval(() => {
        Inertia.reload({
            preserveScroll: true,
            preserveState: true,
        });
    }, autoUpdate > 0 ? autoUpdate * 1000 : null);

    return (
        <>
            <h1 className="whitespace-nowrap">
                { upperFirst(transChoice('common.refresh_rates', 1)) + trans(':') }
            </h1>

            <input
                className="field min-w-fit text-right"
                type="number"
                value={ table.getState().autoUpdate }
                onChange={ (event) => table.options.meta.setAutoUpdate(event.target.value) }
            />
        </>
    );
}
