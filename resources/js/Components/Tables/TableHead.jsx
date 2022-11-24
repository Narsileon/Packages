import ColumnHeader from "@/Components/Tables/Columns/ColumnHeader";

export default function TableHead({
    table,
}) {
    return (
        <thead>
            {
                table.getHeaderGroups().map(headerGroup => (
                    <tr key={ headerGroup.id }>
                        {
                            headerGroup.headers.map(header => (
                                <ColumnHeader
                                    key={ header.id }
                                    table={ table }
                                    header={ header }
                                />
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
    );
}
