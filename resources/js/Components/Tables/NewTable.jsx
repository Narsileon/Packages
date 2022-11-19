import NewTableBody from "@/Components/Tables/NewTableBody";
import NewTableHead from "@/Components/Tables/NewTableHead";

export default function NewTable({ table }) {
    return (
        <section id="table" className="min-h-0">
            <div className={ `min-h-0 h-full border-2 border-color rounded overflow-auto` }>
                <table style={{ width: table.getCenterTotalSize() }}>
                    <NewTableHead table={ table } />
                    <NewTableBody table={ table } />
                </table>
            </div>
        </section>
    );
}