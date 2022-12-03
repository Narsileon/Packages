import { useDrag, useDrop } from "react-dnd";
import { useClickAway, useToggle } from "react-use";
import { flexRender } from "@tanstack/react-table";
import { transChoice } from "@/narsil-localization";
import { useFloating } from "@floating-ui/react-dom";
import { upperFirst } from "lodash";
import Icon from "@/Shared/Svg/Icon";
import Sort from "@/Shared/Svg/Sort";
import ColumnFilter from "@/Components/Tables/Columns/ColumnFilter";

export default function ColumnHeader ({
    table,
    header,
}) {
    const { getState, setColumnOrder } = table
    const { column } = header
    const { columnOrder } = getState()

    const [showMenu, setShowMenu] = useToggle();
    const [showOptions, setShowOptions] = useToggle();

    const [{ isDragging }, dragRef, previewRef] = useDrag({
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        item: () => column,
        type: 'column',
    })

    const [, dropRef] = useDrop({
        accept: 'column',
        drop: (draggedColumn) => {
            const newColumnOrder = reorderColumn(draggedColumn.id, column.id, columnOrder);

            setColumnOrder(newColumnOrder);
        },
    })

    const reorderColumn = (draggedColumnId, targetColumnId, columnOrder) => {
		columnOrder.splice(columnOrder.indexOf(targetColumnId), 0, columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0]);

		return [...columnOrder];
	}

    const { refs, x, y, reference, floating, strategy } = useFloating({
        placement: 'bottom',
    });

    useClickAway(refs.floating, () => {
        setShowOptions(false);
    });

    return (
        <>
            {
                column.id === 'menu' ? (
                    <th
                        className="left-0 z-10"
                        colSpan={ header.colSpan }
                        style={{ width: header.getSize() }}
                    />
                ) : (
                    <th
                        ref={ dropRef }
                        colSpan={ header.colSpan }
                        style={{
                            opacity: isDragging ? 0.5 : 1,
                            width: header.getSize()
                        }}
                    >
                        <div
                            className="grid grid-cols-1 min-h-0"
                            onMouseEnter={ () => setShowMenu(true) }
                            onMouseLeave={ () => setShowMenu(false) }
                            ref={ previewRef }
                        >
                            <div
                                className="relative col-span-1 flex items-center justify-between h-full"
                                ref={ reference }
                            >
                                <button
                                    className="m-1 cursor-move"
                                    ref={ dragRef }
                                >
                                    <Icon name="ellipsis-vertical" />
                                </button>
                                <div className={ `flex flex-grow items-center truncate ${ header.column.getCanSort() ? 'cursor-pointer select-none' : '' }` }
                                    onClick={ header.column.getToggleSortingHandler() }
                                >
                                    <div className="flex flex-grow justify-start py-2 truncate">
                                        <span className="truncate">
                                            {
                                                flexRender(
                                                    upperFirst(transChoice(header.column.columnDef.header, 1)),
                                                    header.getContext()
                                                )
                                            }
                                        </span>
                                    </div>
                                    {
                                        header.column.getCanSort() ? (
                                            <span>
                                                {
                                                    {
                                                        asc: <Sort className="w-5 h-5" order="asc" />,
                                                        desc: <Sort className="w-5 h-5" order="desc" />,
                                                    } [header.column.getIsSorted()] ?? <Sort className="w-5 h-5" />
                                                }
                                            </span>
                                        ) : null
                                    }
                                </div>

                                <div className={ `m-1 transition-all duration-300 ${ showMenu ? 'w-6' : 'w-1 hidden' }`}>
                                    <div className="flex items-center">
                                        <button onClick={ setShowOptions }>
                                            <Icon name="menu" />
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="absolute -right-1 h-full z-10"
                                >
                                    <ColumnResizer header={ header } />
                                </div>
                            </div>
                            {
                                showOptions ? (
                                    <div
                                        className="primary-background border-2 border-color rounded z-10"
                                        ref={ floating }
                                        style={{
                                            position: strategy,
                                            top: y ?? '0',
                                            left: x ?? '0',
                                        }}
                                    >
                                        <div className="grid grid-cols-1 p-2">
                                            {
                                                column.getCanFilter() ? (
                                                    <div className="col-span-1 mr-2">
                                                        <ColumnFilter
                                                            table={ table }
                                                            column={ column }
                                                        />
                                                    </div>
                                                ) : null
                                            }
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    </th>
                )
            }
        </>
    )
}

const ColumnResizer = ({ header }) => {
    return (
        <div
            className="w-1 h-full cursor-col-resize"
            onMouseDown={ header.getResizeHandler() }
            onTouchStart={ header.getResizeHandler() }
        />
    );
}
