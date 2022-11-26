import TableBody from "@/Components/Tables/TableBody";
import TableHead from "@/Components/Tables/TableHead";
import { useHorizontalScroll } from "@/narsil-react";

export default function Table({
    table,
    horizontalScrolling = false,
}) {
    const hozirontalScrollSection = useHorizontalScroll(horizontalScrolling)

    return (
        <section
            id="table"
            className="min-h-0"
        >
            <div
                className="w-fit max-w-full min-h-0 h-full border-2 border-color rounded overflow-auto"
                ref={ hozirontalScrollSection }
            >
                <table style={{ width: table.getCenterTotalSize() }}>
                    <TableHead table={ table } />
                    <TableBody table={ table } />
                </table>
            </div>
        </section>
    );
}