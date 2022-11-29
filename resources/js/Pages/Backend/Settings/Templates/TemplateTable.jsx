import { useTable } from "@/narsil-table";
import { Table } from "@/Components/Tables/Index";

export default function TemplateTable({ columns, template }) {
    const [table] = useTable([], columns, template, false);

    return (
        <Table
            table={ table }
            horizontalScrolling={ true }
        />
    );
}
