import TableBody from "@/Components/Tables/TableBody";
import TableHead from "@/Components/Tables/TableHead";

export default function Table({ table }) {
    return (
        <section id="table" className="min-h-0">
            <div className={ `min-h-0 h-full border-2 border-color rounded overflow-auto` }>
                <table style={{ width: table.getCenterTotalSize() }}>
                    <TableHead table={ table } />
                    <TableBody table={ table } />
                </table>
            </div>
        </section>
    );
}