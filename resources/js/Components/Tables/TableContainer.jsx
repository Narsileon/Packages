import { useFullscreenable } from "@/narsil-react";
import FullScreenButton from "@/Components/Elements/Buttons/FullScreenButton";
import TableFilter from "@/Components/Tables/TableFilter";
import { TableSettings } from "./Index";

export default function TableContainer({
    title,
    table,
    buttons,
    children,
 }) {
    const [container, fullscreen, setFullScreen] = useFullscreenable();

    return (
        <div
            className={ `flex flex-col h-full space-y-4 ${ fullscreen ? 'p-4' : '' }` }
            ref={ container }
        >
            <section id="table-header">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-0 content-start place-content-between">
                    <div className="col-span-1 self-center place-self-start">
                        <span className="text-xl">
                            { title }
                        </span>
                    </div>
                    <div className="flex items-center space-x-2 col-span-1 md:order-2 self-center place-self-end">
                        { buttons }
                        <TableSettings table={ table } />
                        <FullScreenButton
                            isFullScreen={ fullscreen }
                            onClick={ () => setFullScreen() }
                        />
                    </div>

                    <div className="col-span-1 sm:col-span-2 md:col-span-1 md:order-1 place-self-center w-full">
                        <TableFilter
                            value={ table.getState().globalFilter ?? '' }
                            setData={ (value) => table.setGlobalFilter(value) }
                        />
                    </div>
                </div>
            </section>

            { children }
        </div>
    );
}