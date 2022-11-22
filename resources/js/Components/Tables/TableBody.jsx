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
                                    className={ `${ cell.column.id === 'menu' ? 'sticky left-0' : '' }` }
                                    key={ cell.id }
                                    style={{
                                        width: cell.column.getSize(),
                                        maxWidth: cell.column.getSize(),
                                        background: 'inherit',
                                    }}
                                >
                                    <div className="h-full w-full truncate">
                                        { flexRender(cell.column.columnDef.cell, cell.getContext()) }
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
