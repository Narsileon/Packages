import { useFloating } from "@floating-ui/react-dom";
import { flexRender } from "@tanstack/react-table";

export default function TableBody({ table }) {
    return (
        <tbody>
            {
                table.getRowModel().rows.map(row => (
                    <tr key={ row.id }>
                        {
                            row.getVisibleCells().map(cell => (
                                <td
                                    key={ cell.id }
                                    style={{
                                        width: cell.column.getSize(),
                                        maxWidth: cell.column.getSize(),
                                        background: 'inherit',
                                    }}
                                >
                                    <div className="p-2 h-full w-full truncate">
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
