import { useDrag, useDrop } from "react-dnd";
import { flexRender } from "@tanstack/react-table";
import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import Icon from "@/Shared/Svg/Icon";
import Sort from "@/Shared/Svg/Sort";
import ColumnFilter from "@/Components/Tables/Columns/ColumnFilter";

export default function ColumnHeader ({ header, table }) {
    const { getState, setColumnOrder } = table
    const { columnOrder } = getState()
    const { column } = header

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

    const [{ isDragging }, dragRef, previewRef] = useDrag({
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        item: () => column,
        type: 'column',
    })

    return (
        <th
            className="relative"
            ref={ dropRef }
            colSpan={ header.colSpan }
            style={{
                opacity: isDragging ? 0.5 : 1,
                width: header.getSize()
            }}
        >
            <div
                className="grid grid-cols-1"
                ref={ previewRef }
            >
                <div className="col-span-1 flex">
                    <button
                        className="ml-2"
                        ref={ dragRef }
                    >
                        <Icon
                            className="w-6 h-6"
                            name="sort-horizontal"
                        />
                    </button>
                    <div
                        className={ `flex justify-between w-full p-2 whitespace-nowrap space-x-2 ${ header.column.getCanSort() ? 'cursor-pointer select-none' : '' }` }
                        onClick={ header.column.getToggleSortingHandler() }
                    >
                        <span>
                            {
                                flexRender(
                                    upperFirst(transChoice(header.column.columnDef.header, 1)),
                                    header.getContext()
                                )
                            }
                        </span>
                        {
                            header.column.getCanSort() && (
                                <span>
                                    {
                                        {
                                            asc: <Sort className="w-5 h-5" order="asc" />,
                                            desc: <Sort className="w-5 h-5" order="desc" />,
                                        } [header.column.getIsSorted()] ?? <Sort className="w-5 h-5" />
                                    }
                                </span>
                            )
                        }
                    </div>
                </div>
                {
                    header.column.getCanFilter() && (
                        <div className="col-span-1 mr-2">
                            <ColumnFilter
                                table={ table }
                                column={ column }
                            />
                        </div>
                    )
                }
            </div>
            <div
                className={ `absolute right-0 top-0 h-full w-2 cursor-col-resize ${ header.column.getIsResizing() ? 'bg-red-500' : 'bg-blue-500'}` }
                onMouseDown={ header.getResizeHandler() }
                onTouchStart={ header.getResizeHandler() }
            />
        </th>
    )
}