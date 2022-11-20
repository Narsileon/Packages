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
                                    {...{
                                        key: cell.id,
                                        style: { width: cell.column.getSize() },
                                    }}
                                >
                                    { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
    );
}
