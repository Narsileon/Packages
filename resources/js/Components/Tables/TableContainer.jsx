import { useRef } from "react";
import { useFullscreen, useToggle } from "react-use";
import FullScreenButton from "@/Components/Elements/Buttons/FullScreenButton";
import TableFilter from "@/Components/Tables/TableFilter";

export default function TableContainer({
    title,
    table,
    buttons,
    children,
 }) {
    const tableContainer = useRef();

    const [fullscreen, setFullScreen] = useToggle(false);

    const isFullscreen = useFullscreen(tableContainer, fullscreen, { onClose: () => setFullScreen(false) });

    return (
        <div
            className={ `flex flex-col h-full space-y-4 ${ isFullscreen ? 'p-4' : '' }` }
            ref={ tableContainer }
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
                        <FullScreenButton
                            isFullScreen={ isFullscreen }
                            onClick={ () => setFullScreen() }
                        />
                    </div>

                    <div className="col-span-1 sm:col-span-2 md:col-span-1 md:order-1 place-self-center w-full">
                        <TableFilter
                            value={ table.getState().globalFilter ?? '' }
                            onChange={ (value) => table.setGlobalFilter(value) }
                        />
                    </div>
                </div>
            </section>

            { children }
        </div>
    );
}