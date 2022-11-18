import NewTableBody from "@/Components/Tables/NewTableBody";
import NewTableHead from "@/Components/Tables/NewTableHead";

export default function NewTable({ table }) {
    return (
        <table
            style={{ width: table.getCenterTotalSize() }}
        >
            <NewTableHead table={ table } />
            <NewTableBody table={ table } />
        </table>
    );
}