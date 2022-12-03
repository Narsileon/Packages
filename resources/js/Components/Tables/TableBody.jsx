import { useFloating } from "@floating-ui/react-dom";
import { flexRender } from "@tanstack/react-table";

export default function TableBody({ table }) {
    const { refs, x, y, reference, floating, strategy } = useFloating({
        placement: 'bottom',
    });

    return (
        <tbody>
            {
                table.getRowModel().rows.map(row => (
                    <tr key={ row.id }>
                        {
                            row.getVisibleCells().map(cell => (
                                <td
                                    className={ `${ cell.column.id === 'menu' ? 'sticky left-0' : '' }` }
                                    ref={ reference }
                                    key={ cell.id }
                                    style={{
                                        width: cell.column.getSize(),
                                        maxWidth: cell.column.getSize(),
                                        background: 'inherit',
                                    }}
                                >
                                    <div className="h-full w-full truncate">
                                        {
                                            cell.column.columnDef.type == 'datetime' ? (
                                                new Date(cell.getValue()).toString()
                                            ) : (
                                                flexRender(cell.column.columnDef.cell, cell.getContext())
                                            )
                                        }
                                    </div>
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
    );
}
