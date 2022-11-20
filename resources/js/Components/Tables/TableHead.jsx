import ColumnHeader from "@/Components/Tables/ColumnHeader";

export default function TableHead({ table }) {
    return (
        <thead>
            {
                table.getHeaderGroups().map(headerGroup => (
                    <tr key={ headerGroup.id }>
                        {
                            headerGroup.headers.map(header => (
                                <ColumnHeader
                                    key={ header.id }
                                    header={ header }
                                    table={ table }
                                />
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
    );
}
